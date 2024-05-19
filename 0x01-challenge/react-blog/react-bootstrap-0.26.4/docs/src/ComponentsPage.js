/* eslint react/no-did-mount-set-state: 0 */

import React from 'react';
import getOffset from 'dom-helpers/query/offset';
import css from 'dom-helpers/style';

import Affix from '../../src/Affix';
import Nav from '../../src/Nav';
import SubNav from '../../src/SubNav';
import NavItem from '../../src/NavItem';

import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PropTable from './PropTable';
import PageFooter from './PageFooter';
import ReactPlayground from './ReactPlayground';
import Samples from './Samples';
import Anchor from './Anchor';

const ComponentsPage = React.createClass({
  getInitialState() {
    return {
      activeNavItemHref: null,
      navOffsetTop: null
    };
  },

  handleNavItemSelect(key, href) {
    this.setState({
      activeNavItemHref: href
    });

    window.location = href;
  },

  componentDidMount() {
    let elem = React.findDOMNode(this.refs.sideNav);
    let sideNavOffsetTop = getOffset(elem).top;
    let sideNavMarginTop = parseInt(css(elem.firstChild, 'marginTop'), 10);
    let topNavHeight = React.findDOMNode(this.refs.topNav).offsetHeight;

    this.setState({
      navOffsetTop: sideNavOffsetTop - topNavHeight - sideNavMarginTop,
      navOffsetBottom: React.findDOMNode(this.refs.footer).offsetHeight
    });
  },

  render() {
    return (
        <div>
          <NavMain activePage="components" ref="topNav" />

          <PageHeader
            title="Components"
            subTitle="" />

          <div className="container bs-docs-container">
            <div className="row">
              <div className="col-md-9" role="main">


                {/* Buttons */}
                <div className="bs-docs-section">
                  <h1 className="page-header"><Anchor id="buttons">Buttons</Anchor> <small>Button</small></h1>
                  <h2><Anchor id="buttons-options">Options</Anchor></h2>
                  <p>Use any of the available button style types to quickly create a styled button. Just modify the <code>bsStyle</code> prop.</p>
                  <ReactPlayground codeText={Samples.ButtonTypes} />
                  <div className="bs-callout bs-callout-warning">
                    <h4>Button spacing</h4>
                    <p>Because React doesn"t output newlines between elements, buttons on the same line are displayed
                    flush against each other. To preserve the spacing between multiple inline buttons, wrap your
                    button group in <code>{"<ButtonToolbar />"}</code>.</p>
                  </div>

                  <h2><Anchor id="buttons-sizes">Sizes</Anchor></h2>
                  <p>Fancy larger or smaller buttons? Add <code>bsSize="large"</code>, <code>bsSize="small"</code>, or <code>bsSize="xsmall"</code> for additional sizes.</p>
                  <ReactPlayground codeText={Samples.ButtonSizes} />

                  <p>Create block level buttons—those that span the full width of a parent— by adding the <code>block</code> prop.</p>
                  <ReactPlayground codeText={Samples.ButtonBlock} />

                  <h2><Anchor id="buttons-active">Active state</Anchor></h2>
                  <p>To set a buttons active state simply set the components <code>active</code> prop.</p>
                  <ReactPlayground codeText={Samples.ButtonActive} />

                  <h2><Anchor id="buttons-disabled">Disabled state</Anchor></h2>
                  <p>Make buttons look unclickable by fading them back 50%. To do this add the <code>disabled</code> attribute to buttons.</p>
                  <ReactPlayground codeText={Samples.ButtonDisabled} />

                  <div className="bs-callout bs-callout-warning">
                    <h4>Event handler functionality not impacted</h4>
                    <p>This prop will only change the <code>{"<Button />"}</code>&#8217;s appearance, not its
                      functionality. Use custom logic to disable the effect of the <code>onClick</code> handlers.</p>
                  </div>

                  <h2><Anchor id="buttons-tags">Button tags</Anchor></h2>
                  <p>The DOM element tag is choosen automatically for you based on the props you supply. Passing
                    a <code>href</code> will result in the button using a <code>{"<a />"}</code> element otherwise
                    a <code>{"<button />"}</code> element will be used.</p>
                  <ReactPlayground codeText={Samples.ButtonTagTypes} />

                  <h2><Anchor id="buttons-loading">Button loading state</Anchor></h2>
                  <p>When activating an asynchronous action from a button it is a good UX pattern to give the user
                    feedback as to the loading state, this can easily be done by updating
                    your <code>{"<Button />"}</code>&#8217;s props from a state change like below.</p>
                  <ReactPlayground codeText={Samples.ButtonLoading} />

                  <h3><Anchor id="buttons-props">Props</Anchor></h3>
                  <PropTable component="Button"/>

                </div>

                {/* Button Groups */}
                <div className="bs-docs-section">
                  <h1 className="page-header"><Anchor id="btn-groups">Button groups</Anchor> <small>ButtonGroup, ButtonToolbar</small></h1>
                  <p className="lead">Group a series of buttons together on a single line with the button group.</p>

                  <h3><Anchor id="btn-groups-single">Basic example</Anchor></h3>
                  <p>Wrap a series of <code>{"<Button />"}</code>s in a <code>{"<ButtonGroup />"}</code>.</p>
                  <ReactPlayground codeText={Samples.ButtonGroupBasic} />

                  <h3><Anchor id="btn-groups-toolbar">Button toolbar</Anchor></h3>
                  <p>Combine sets of <code>{"<ButtonGroup />"}</code>s into a <code>{"<ButtonToolbar />"}</code> for more complex components.</p>
                  <ReactPlayground codeText={Samples.ButtonToolbarBasic} />

                  <h3><Anchor id="btn-groups-sizing">Sizing</Anchor></h3>
                  <p>Instead of applying button sizing props to every button in a group, just add <code>bsSize</code> prop to the <code>{"<ButtonGroup />"}</code>.</p>
                  <ReactPlayground codeText={Samples.ButtonGroupSizes} />

                  <h3><Anchor id="btn-groups-nested">Nesting</Anchor></h3>
                  <p>You can place other button types within the <code>{"<ButtonGroup />"}</code> like <code>{"<DropdownButton />"}</code>s.</p>
                  <ReactPlayground codeText={Samples.ButtonGroupNested} />

                  <h3><Anchor id="btn-groups-vertical">Vertical variation</Anchor></h3>
                  <p>Make a set of buttons appear vertically stacked rather than horizontally. <strong
                    className="text-danger">Split button dropdowns are not supported here.</strong></p>
                  <p>Just add <code>vertical</code> to the <code>{"<ButtonGroup />"}</code>.</p>
                  <ReactPlayground codeText={Samples.ButtonGroupVertical} />
                  <br />
                  <p>Moreover, you can have buttons be block level elements so they take the full width of their container, just add <code>block</code> to the <code>{"<ButtonGroup />"}</code>, in addition to the <code>vertical</code> you just added.</p>
                  <ReactPlayground codeText={Samples.ButtonGroupBlock} />

                  <h3><Anchor id="btn-groups-justified">Justified button groups</Anchor></h3>
                  <p>Make a group of buttons stretch at equal sizes to span the entire width of its parent. Also works with button dropdowns within the button group.</p>
                  <div className="bs-callout bs-callout-warning">
                    <h4>Style issues</h4>
                    <p>There are some issues and workarounds required when using this property, please see <a href="http://getbootstrap.com/components/#btn-groups-justified">bootstrap&#8217;s button group docs</a> for more specifics.</p>
                  </div>
                  <p>Just add <code>justified</code> to the <code>{"<ButtonGroup />"}</code>.</p>
                  <ReactPlayground codeText={Samples.ButtonGroupJustified} />

                  <h3><Anchor id="btn-groups-props">Props</Anchor></h3>
                  <PropTable component="ButtonGroup"/>
                </div>

                <div className="bs-docs-section">
                  <h1 className="page-header"><Anchor id="btn-dropdowns">Button dropdowns</Anchor></h1>
                  <p className="lead">Use <code>{"<DropdownButton />"}</code> or <code>{"<SplitButton />"}</code> components to display a button with a dropdown menu.</p>

                  <h3><Anchor id="btn-dropdowns-single">Single button dropdowns</Anchor></h3>
                  <p>Create a dropdown button with the <code>{"<DropdownButton />"}</code> component.</p>
                  <ReactPlayground codeText={Samples.DropdownButtonBasic} />

                  <h3><Anchor id="btn-dropdowns-split">Split button dropdowns</Anchor></h3>
                  <p>Similarly, create split button dropdowns with the <code>{"<SplitButton />"}</code> component.</p>
                  <ReactPlayground codeText={Samples.SplitButtonBasic} />

                  <h3><Anchor id="btn-dropdowns-sizing">Sizing</Anchor></h3>
                  <p>Button dropdowns work with buttons of all sizes.</p>
                  <ReactPlayground codeText={Samples.DropdownButtonSizes} />

                  <h3><Anchor id="btn-dropdowns-nocaret">No caret variation</Anchor></h3>
                  <p>Remove the caret using the <code>noCaret</code> prop.</p>
                  <ReactPlayground codeText={Samples.DropdownButtonNoCaret} />

                  <h3><Anchor id="btn-dropdowns-dropup">Dropup variation</Anchor></h3>
                  <p>Trigger dropdown menus that site above the button by adding the <code>dropup</code> prop.</p>
                  <ReactPlayground codeText={Samples.SplitButtonDropup} />

                  <h3><Anchor id="btn-dropdowns-right">Dropdown right variation</Anchor></h3>
                  <p>Trigger dropdown menus that align to the right of the button using the <code>pullRight</code> prop.</p>
                  <ReactPlayground codeText={Samples.SplitButtonRight} />

                  <h3><Anchor id="btn-dropdowns-custom">Dropdown Customization</Anchor></h3>
                  <p>
                    If the default handling of the dropdown menu and toggle components aren"t to your liking, you can
                    customize them, by using the more basic <code>Dropdown</code> Component to explicitly specify
                    the Toggle and Menu components
                  </p>
                  <div className="bs-callout bs-callout-info">
                    <h4>Additional Import Options</h4>
                    <p>
                      As a convenience Toggle and Menu components available as static properties
                      on the Dropdown component. However, you can also import them directly, from
                      the <code>/lib</code> directory like: <code>{'require("react-bootstrap/lib/DropdownToggle")'}</code>.
                    </p>
                  </div>
                  <ReactPlayground codeText={Samples.DropdownButtonCustom} />

                  <h4>Custom Dropdown Components</h4>

                  <p>
                    For those that want to customize everything, you can forgo the included Toggle and Menu components,
                    and create your own. In order to tell the Dropdown component what role your custom components play
                    add a special prop <code>bsRole</code> to your menu or toggle components. The Dropdown expects
                    at least one component with <code>bsRole="toggle"</code> and exactly one with <code>bsRole="menu"</code>.
                  </p>
                  <ReactPlayground codeText={Samples.DropdownButtonCustomMenu} />

                  <h3><Anchor id="btn-dropdowns-props">Props</Anchor></h3>

                  <h4><Anchor id="btn-dropdowns-props-dropdown-button">DropdownButton</Anchor></h4>
                  <PropTable component="DropdownButton"/>

                  <h4><Anchor id="btn-dropdowns-props-split">SplitButton</Anchor></h4>
                  <PropTable component="SplitButton"/>

                  <h4><Anchor id="btn-dropdowns-props-dropdown">Dropdown</Anchor></h4>
                  <PropTable component="Dropdown"/>
                </div>

                {/* Menu Item */}
                <div className="bs-docs-section">
                  <h1 className="page-header"><Anchor id="menu-item">Menu Item</Anchor> <small> MenuItem</small></h1>
                  <p>This is a component used in other components (see <a href="buttons">Buttons</a>, <a href="#navbars">Navbars</a>).</p>
                  <p>It supports the basic anchor properties <code>href</code>, <code>target</code>, <code>title</code>.</p>
                  <p>It also supports different properties of the normal Bootstrap MenuItem.
                    <ul>
                      <li><code>header</code>: To add a header label to sections</li>
                      <li><code>divider</code>: Adds an horizontal divider between sections</li>
                      <li><code>disabled</code>: shows the item as disabled, and prevents the onclick</li>
                      <li><code>eventKey</code>: passed to the callback</li>
                      <li><code>onSelect</code>: a callback that is called when the user clicks the item.</li>
                    </ul>
                  <p>The callback is called with the following arguments: <code>eventKey</code>, <code>href</code> and <code>target</code></p>
                  </p>
                  <ReactPlayground codeText={Samples.MenuItem} />

                  <h3><Anchor id="menu-item-props">Props</Anchor></h3>
                  <PropTable component="MenuItem"/>
                </div>

              {/* Panels */}
                <div className="bs-docs-section">
                  <h1 className="page-header"><Anchor id="panels">Panels</Anchor> <small>Panel, PanelGroup, Accordion</small></h1>

                  <h3><Anchor id="panels-basic">Basic example</Anchor></h3>
                  <p>By default, all the <code>&lt;Panel /&gt;</code> does is apply some basic border and padding to contain some content.</p>
                  <p>You can pass on any additional properties you need, e.g. a custom <code>onClick</code> handler, as it is shown in the example code. They all will apply to the wrapper <code>div</code> element.</p>
                  <ReactPlayground codeText={Samples.PanelBasic} />

                  <h3><Anchor id="panels-collapsible">Collapsible Panel</Anchor></h3>
                  <ReactPlayground codeText={Samples.PanelCollapsible} />

                  <h3><Anchor id="panels-heading">Panel with heading</Anchor></h3>
                  <p>Easily add a heading container to your panel with the <code>header</code> prop.</p>
                  <ReactPlayground codeText={Samples.PanelWithHeading} />

                  <h3><Anchor id="panels-footer">Panel with footer</Anchor></h3>
                  <p>Pass buttons or secondary text in the <code>footer</code> prop. Note that panel footers do not inherit colors and borders when using contextual variations as they are not meant to be in the foreground.</p>
                  <ReactPlayground codeText={Samples.PanelWithFooter} />

                  <h3><Anchor id="panels-contextual">Contextual alternatives</Anchor></h3>
                  <p>Like other components, easily make a panel more meaningful to a particular context by adding a <code>bsStyle</code> prop.</p>
                  <ReactPlayground codeText={Samples.PanelContextual} />

                  <h3><Anchor id="panels-tables">With tables and list groups</Anchor></h3>
                  <p>Add the <code>fill</code> prop to <code>&lt;Table /&gt;</code> or <code>&lt;ListGroup /&gt;</code> elements to make them fill the panel.</p>
                  <ReactPlayground codeText={Samples.PanelListGroupFill} />

                  <h3><Anchor id="panels-controlled">Controlled PanelGroups</Anchor></h3>
                  <p><code>PanelGroup</code>s can be controlled by a parent component. The <code>activeKey</code> prop dictates which panel is open.</p>
                  <ReactPlayground codeText={Samples.PanelGroupControlled} />

                  <h3><Anchor id="panels-uncontrolled">Uncontrolled PanelGroups</Anchor></h3>
                  <p><code>PanelGroup</code>s can also be uncontrolled where they manage their own state. The <code>defaultActiveKey</code> prop dictates which panel is open when initially.</p>
                  <ReactPlayground codeText={Samples.PanelGroupUncontrolled} />

                  <h3><Anchor id="panels-accordion">Accordions</Anchor></h3>
                  <p><code>&lt;Accordion /&gt;</code> aliases <code>&lt;PanelGroup accordion /&gt;</code>.</p>
                  <ReactPlayground codeText={Samples.PanelGroupAccordion} />

                  <h3><Anchor id="panels-props">Props</Anchor></h3>

                  <h4><Anchor id="panels-props-accordion">Panels, Accordion</Anchor></h4>
                  <PropTable component="Panel"/>

                  <h4><Anchor id="panels-props-group">PanelGroup</Anchor></h4>
                  <PropTable component="PanelGroup"/>

                </div>

                <div className="bs-docs-section">
                  <h1 className="page-header"><Anchor id="modals">Modals</Anchor> <small>Modal</small></h1>

                  <h3><Anchor id="modals-static">Static Markup</Anchor></h3>
                  <p>A modal dialog component</p>
                  <ReactPlayground codeText={Samples.ModalStatic} />

                  <h3><Anchor id="modals-live">Basic example</Anchor></h3>
                  <p></p>
                  <p>
                    A modal with header, body, and set of actions in the footer. Use <code>{"<Modal/>"}</code> in combination with other components to
                    show or hide your Modal. The <code>{"<Modal/>"}</code> Component comes with
                    a few convenient "sub components": <code>{"<Modal.Header/>"}</code>, <code>{"<Modal.Title/>"}</code>, <code>{"<Modal.Body/>"}</code>,
                    and <code>{"<Modal.Footer/>"}</code>, which you can use to build the Modal content.
                  </p>
                  <ReactPlayground codeText={Samples.Modal} />
                  <div className="bs-callout bs-callout-info">
                    <h4>Additional Import Options</h4>
                    <p>
                      The Modal Header, Title, Body, and Footer components are available as static properties the <code>{"<Modal/>"}</code> component, but you can also,
                      import them directly from the <code>/lib</code> directory like: <code>{'require("react-bootstrap/lib/ModalHeader")'}</code>.
                    </p>
                  </div>

                  <h3><Anchor id="modals-contained">Contained Modal</Anchor></h3>
                  <p>You will need to add the following css to your project and ensure that your container has the <code>modal-container</code> class.</p>
                  <pre>
                    {React.DOM.code(null,
                      '.modal-container {\n' +
                      '  position: relative;\n' +
                      '}\n' +
                      '.modal-container .modal, .modal-container .modal-backdrop {\n' +
                      '  position: absolute;\n' +
                      '}\n'
                    )}
                  </pre>
                  <ReactPlayground codeText={Samples.ModalContained} />

                  <h3><Anchor id="modal-default-sizing">Sizing modals using standard Bootstrap props</Anchor></h3>
                  <p>You can specify a bootstrap large or small modal by using the "bsSize" prop.</p>
                  <ReactPlayground codeText={Samples.ModalDefaultSizing} />

                  <h3><Anchor id="modal-custom-sizing">Sizing modals using custom CSS</Anchor></h3>
                  <p>You can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.</p>
                  <ReactPlayground codeText={Samples.ModalCustomSizing} />

                  <h3><Anchor id="modals-props">Props</Anchor></h3>

                  <h4><Anchor id="modals-props-modal">Modal</Anchor></h4>
                  <PropTable component="Modal"/>

                  <h4><Anchor id="modals-props-modal-header">Modal.Header</Anchor></h4>
                  <PropTable component="ModalHeader"/>

                  <h4><Anchor id="modals-props-modal-title">Modal.Title</Anchor></h4>
                  <PropTable component="ModalTitle"/>

                  <h4><Anchor id="modals-props-modal-body">Modal.Body</Anchor></h4>
                  <PropTable component="ModalBody"/>

                  <h4><Anchor id="modals-props-modal-footer">Modal.Footer</Anchor></h4>
                  <PropTable component="ModalFooter"/>
                </div>


                {/* Tooltip */}
                <div className="bs-docs-section">
                  <h1 className="page-header"><Anchor id="tooltips">Tooltip</Anchor></h1>
                  <p>
                    Tooltip component for a more stylish alternative to that anchor tag <code>title</code> attribute.
                  </p>
                  <ReactPlayground codeText={Samples.TooltipBasic} exampleClassName="tooltip-static"/>

                  <h4><Anchor id="tooltips-overlay-trigger">With OverlayTrigger</Anchor></h4>
                  <p>Attach and position tooltips with <code>OverlayTrigger</code>.</p>
                  <ReactPlayground codeText={Samples.TooltipPositioned} />

                  <h4><Anchor id="tooltips-in-text">In text copy</Anchor></h4>
                  <p>Positioned tooltip in text copy.</p>
                  <ReactPlayground codeText={Samples.TooltipInCopy} />

                  <h3><Anchor id="tooltips-props">Props</Anchor></h3>

                  <h4><Anchor id="overlays-trigger-props">Overlay Trigger</Anchor></h4>
                  <PropTable component="OverlayTrigger"/>

                  <h4><Anchor id="tooltips-props-tooltip">Tooltip</Anchor></h4>
                  <PropTable component="Tooltip"/>
                </div>

                {/* Popover */}
                <div className="bs-docs-section">
                  <h1 className="page-header"><Anchor id="popovers">Popovers</Anchor></h1>

                  <p>
                    The Popover, offers a more robust alternative to the Tooltip for displaying overlays of content.
                  </p>
                  <ReactPlayground codeText={Samples.PopoverBasic}/>

                  <h4><Anchor id="popovers-overlay-trigger">With OverlayTrigger</Anchor></h4>
                  <p>The Popover component, like the Tooltip can be used with an <code>OverlayTrigger</code> Component, and positioned around it.</p>
                  <ReactPlayground codeText={Samples.PopoverPositioned} />

                  <h4><Anchor id="popovers-trigger-behaviors">Trigger behaviors</Anchor></h4>
                  <p>It"s inadvisable to use <code>"hover"</code> or <code>"focus"</code> triggers for popovers, because they have poor accessibility from keyboard and on mobile devices.</p>
                  <ReactPlayground codeText={Samples.PopoverTriggerBehaviors} />

                  <h4><Anchor id="popovers-in-container">Popover component in container</Anchor></h4>
                  <ReactPlayground codeText={Samples.PopoverContained} exampleClassName="bs-example-popover-contained" />

                  <h4><Anchor id="popovers-positioned-scrolling">Positioned popover components in scrolling container</Anchor></h4>
                  <ReactPlayground codeText={Samples.PopoverPositionedScrolling} exampleClassName="bs-example-popover-scroll" />

                  <h3><Anchor id="popover-props">Props</Anchor></h3>
                  <PropTable component="Popover"/>
                </div>

                {/* Overlay */}
                <div className="bs-docs-section">
                  <h1 className="page-header"><Anchor id="overlays">Overlay</Anchor></h1>

                  <p>
                    The <code>OverlayTrigger</code> component is great for most use cases, but as a higher level abstraction it can lack the flexibility needed
                    to build more nuanced or custom behaviors into your Overlay components. For these cases it can be helpful to forgo the trigger and use
                    the <code>Overlay</code> component directly.
                  </p>
                  <ReactPlayground codeText={Samples.Overlay}/>

                  <h4><Anchor id="overlays-overlay">Use Overlay instead of Tooltip and Popover</Anchor></h4>
                  <p>
                    You don"t need to use the provided <code>Tooltip</code> or <code>Popover</code> components. Creating custom overlays
                    is as easy as wrapping some markup in an <code>Overlay</code> component
                  </p>
                  <ReactPlayground codeText={Samples.OverlayCustom} />

                  <h3><Anchor id="overlays-props">Props</Anchor></h3>
                  <PropTable component="Overlay"/>
                </div>

                {/* Progress Bar */}
                <div className="bs-docs-section">
                  <h1 className="page-header"><Anchor id="progress">Progress bars</Anchor> <small>ProgressBar</small></h1>

                  <p className="lead">Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>

                  <h2><Anchor id="progress-basic">Basic example</Anchor></h2>
                  <p>Default progress bar.</p>
                  <ReactPlayground codeText={Samples.ProgressBarBasic} />
