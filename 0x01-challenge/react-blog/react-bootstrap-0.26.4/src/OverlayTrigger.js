/* eslint-disable react/prop-types */
import React, { cloneElement } from 'react';
import contains from 'dom-helpers/query/contains';
import createChainedFunction from './utils/createChainedFunction';
import createContextWrapper from './utils/createContextWrapper';
import Overlay from './Overlay';
import warning from 'react/lib/warning';
import pick from 'lodash-compat/object/pick';
/**
 * Check if value one is inside or equal to the of value
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */
function isOneOf(one, of) {
  if (Array.isArray(of)) {
    return of.indexOf(one) >= 0;
  }
  return one === of;
}

const OverlayTrigger = React.createClass({
  propTypes: {

    ...Overlay.propTypes,

     /**
     * Specify which action or actions trigger Overlay visibility
     */
    trigger: React.PropTypes.oneOfType([
      React.PropTypes.oneOf(['click', 'hover', 'focus']),
      React.PropTypes.arrayOf(React.PropTypes.oneOf(['click', 'hover', 'focus']))
    ]),

    /**
     * A millisecond delay amount to show and hide the Overlay once triggered
     */
    delay: React.PropTypes.number,
    /**
     * A millisecond delay amount before showing the Overlay once triggered.
     */
    delayShow: React.PropTypes.number,
    /**
     * A millisecond delay amount before hiding the Overlay once triggered.
     */
    delayHide: React.PropTypes.number,

    /**
     * The initial visibility state of the Overlay, for more nuanced visibility controll consider
     * using the Overlay component directly.
     */
    defaultOverlayShown: React.PropTypes.bool,

    /**
     * An element or text to overlay next to the target.
     */
    overlay: React.PropTypes.node.isRequired,

    /**
     * @private
     */
    onBlur: React.PropTypes.func,
    /**
     * @private
     */
    onClick: React.PropTypes.func,
    /**
     * @private
     */
    onFocus: React.PropTypes.func,
    /**
     * @private
     */
    onMouseEnter: React.PropTypes.func,
    /**
     * @private
     */
    onMouseLeave: React.PropTypes.func,

    // override specific overlay props
    /**
     * @private
     */
    target() {},
     /**
     * @private
     */
    onHide() {},
    /**
     * @private
     */
    show() {}
  },

  getDefaultProps() {
    return {
      defaultOverlayShown: false,
      trigger: ['hover', 'focus']
    };
  },

  getInitialState() {
    return {
      isOverlayShown: this.props.defaultOverlayShown
    };
  },

  show() {
    this.setState({
      isOverlayShown: true
    });
  },

  hide() {
    this.setState({
      isOverlayShown: false
    });
  },

  toggle() {
    if (this.state.isOverlayShown) {
      this.hide();
    } else {
      this.show();
    }
  },

  componentWillMount() {
    this.handleMouseOver = this.handleMouseOverOut.bind(null, this.handleDelayedShow);
    this.handleMouseOut = this.handleMouseOverOut.bind(null, this.handleDelayedHide);
  },

  componentDidMount() {
    this._mountNode = document.createElement('div');
    React.render(this._overlay, this._mountNode);
  },

  componentWillUnmount() {
    React.unmountComponentAtNode(this._mountNode);
    this._mountNode = null;
    clearTimeout(this._hoverDelay);
  },

  componentDidUpdate() {
    if (this._mountNode) {
      React.render(this._overlay, this._mountNode);
    }
  },

  getOverlayTarget() {
    return React.findDOMNode(this);
  },
