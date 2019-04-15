/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(['ojs/ojcore', 'knockout', 'navigation', 'ojs/ojmodule-element-utils', 'ojs/ojrouter', 'ojs/ojdialog',
  'ojs/ojoffcanvas','ojs/ojknockout', 'ojs/ojmodule-element'],
  function (oj, ko, nav, moduleUtils) {
    /*
     * Your application specific code will go here
     */
    function AppControllerViewModel() {
      var self = this;

      // Router setup
      self.router = oj.Router.rootInstance;
      self.router.configure({
        'home': {label: 'Home', isDefault: true},
        'people': {label: 'People'},
        'library': {label: 'Library'},
        'graphics': {label: 'Graphics'},
        'performance': {label: 'Performance'}
      });
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

      // Media queries for repsonsive layouts
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
      var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
      self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);

      // Navigation and Offcanvas
      self.drawerParams = {
        displayMode: 'push',
        selector: '#offcanvas',
        content: '#pageContent'
      };
      // Called by navigation drawer toggle button and after selection of nav drawer item
      self.toggleDrawer = function() {
        return oj.OffcanvasUtils.toggle(self.drawerParams);
      };
      // Close offcanvas on medium and larger screens
      self.mdScreen.subscribe(function() {oj.OffcanvasUtils.close(self.drawerParams);});
      self.navDataSource = nav.dataSource;
      // Called by nav drawer selection events so we can close drawer after selection
      self.navChange = function(event, data, bindingContext) {
        if (event.detail.value !== self.router.stateId()) {
          self.toggleDrawer();
        }
      };

      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("QuickStart");
      // User Info used in Global Navigation area
      self.userLogin = ko.observable("john.hancock@oracle.com");
      // Dropdown menu states
      self.menuItemSelect = function (event, data, bindingContext) {
        switch (event.target.id) {
          case "about":
            document.getElementById("aboutDialog").open();
            break;
          default:
        }
      };

      // Content
      self.navContent = ko.observable({'view':[]});
      moduleUtils.createView({'viewPath':'views/navContent.html'}).then(function(view) {
        self.navContent({'view':view});
      });

      self.mainContent = ko.observable({'view':[], 'viewModel':null});
      // Update main content when module config from the router changes
      ko.computed(function() {
        var name = self.router.moduleConfig.name();
        var viewPath = 'views/' + name + '.html';
        var modelPath = 'viewModels/' + name;
        var masterPromise = Promise.all([
          moduleUtils.createView({'viewPath':viewPath}),
          moduleUtils.createViewModel({'viewModelPath':modelPath})
        ]);
        masterPromise.then(
          function(values){
            self.mainContent({'view':values[0],'viewModel':values[1]});
          }
        );
      });

      self.compContent = ko.observable({'view':[]});
      moduleUtils.createView({'viewPath':'views/compContent.html'}).then(function(view) {
        self.compContent({'view':view});
      });

      // Footer
      function footerLink(name, id, linkTarget) {
        this.name = name;
        this.linkId = id;
        this.linkTarget = linkTarget;
      }
      self.footerLinks = ko.observableArray([
        new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
        new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
        new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
        new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
        new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
      ]);
    }

    return new AppControllerViewModel();
  }
);
