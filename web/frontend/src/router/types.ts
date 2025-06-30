type IRoute = {
  path: string;
  title: string;
  icon: string;
  name: string;
}

type IRouteGroup = {
  id: string;
  title: string;
  nodes: IRoute[];
}

type IRouteGroups = {
  title: string;
  path: string;
  name: string;
  routes: IRouteGroup[];
}

type IRoutes = IRouteGroups[];

const Settings: IRouteGroups = {
  title: 'Settings',
  path: '/settings',
  name: 'settings',
  routes: [
    {
      id: 'review-collection',
      title: 'Review Collection',
      nodes: [
        {
          path: '/import-reviews',
          title: 'Import Reviews',
          icon: 'import-reviews',
          name: 'settings-review-collection-import-reviews'
        },
        {
          path: '/request-reviews',
          title: 'Request Reviews',
          icon: 'request-reviews',
          name: 'settings-review-collection-request-reviews'
        },
        {
          path: '/request-schedulling',
          title: 'Request Schedulling',
          icon: 'request-schedulling',
          name: 'settings-review-collection-request-schedulling'
        },
        {
          path: '/email-templates',
          title: 'Email Templates',
          icon: 'email-templates',
          name: 'settings-review-collection-email-templates'
        },
        {
          path: '/publish-and-moderation',
          title: 'Publish and Moderation',
          icon: 'publish-and-moderation',
          name: 'settings-review-collection-publish-and-moderation'
        }
      ]
    },
    {
      id: 'review-display',
      title: 'Review Display',
      nodes: [
        {
          path: '/widgets',
          title: 'Widgets',
          icon: 'widgets',
          name: 'settings-review-display-widgets'
        },
        {
          path: '/product-review-groups',
          title: 'Product Review Groups',
          icon: 'product-review-groups',
          name: 'settings-review-display-product-review-groups'
        },
        {
          path: '/social-sharing',
          title: 'Social Sharing',
          icon: 'social-sharing',
          name: 'settings-review-display-social-sharing'
        },
        {
          path: '/google-and-seos',
          title: 'Google and Seos',
          icon: 'google-and-seos',
          name: 'settings-review-display-google-and-seos'
        }
      ]
    },
    {
      id: 'discount-and-rewards',
      title: 'Discount and Rewards',
      nodes: [
        {
          path: '/coupons',
          title: 'Coupons',
          icon: 'coupons',
          name: 'settings-discount-and-rewards-coupons'
        },
        {
          path: '/refferals',
          title: 'Refferals',
          icon: 'refferals',
          name: 'settings-discount-and-rewards-refferals'
        }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      nodes: [
        {
          path: '/integrations',
          title: 'Integrations',
          icon: 'integrations',
          name: 'settings-integrations'
        }
      ]
    },
    {
      id: 'general',
      title: 'General',
      nodes: [
        {
          path: '/plan',
          title: 'Plan',
          icon: 'plan',
          name: 'settings-general-plan'
        },
        {
          path: '/branding',
          title: 'Branding',
          icon: 'branding',
          name: 'settings-general-branding'
        },
        {
          path: '/language',
          title: 'Language',
          icon: 'language',
          name: 'settings-general-language'
        },
        {
          path: '/admin-notifications',
          title: 'Admin Notifications',
          icon: 'admin-notifications',
          name: 'settings-general-admin-notifications'
        },
        {
          path: '/advanced',
          title: 'Advanced',
          icon: 'advanced',
          name: 'settings-general-advanced'
        }
      ]
    }
  ]
}

const routes: IRoutes = [Settings];
