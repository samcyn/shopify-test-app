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

const Reviews: IRouteGroups = {
  title: 'Reviews',
  path: '/reviews',
  name: 'reviews',
  routes: [
    {
      id: 'review-management',
      title: 'Review Management',
      nodes: [
        {
          path: '/all-reviews',
          title: 'All Reviews',
          icon: 'all-reviews',
          name: 'reviews-review-management-all-reviews'
        },
        {
          path: '/pending-reviews',
          title: 'Pending Reviews',
          icon: 'pending-reviews',
          name: 'reviews-review-management-pending-reviews'
        },
        {
          path: '/approved-reviews',
          title: 'Approved Reviews',
          icon: 'approved-reviews',
          name: 'reviews-review-management-approved-reviews'
        },
        {
          path: '/rejected-reviews',
          title: 'Rejected Reviews',
          icon: 'rejected-reviews',
          name: 'reviews-review-management-rejected-reviews'
        }
      ]
    },
    {
      id: 'review-analytics',
      title: 'Review Analytics',
      nodes: [
        {
          path: '/overview',
          title: 'Overview',
          icon: 'overview',
          name: 'reviews-review-analytics-overview'
        },
        {
          path: '/performance-metrics',
          title: 'Performance Metrics',
          icon: 'performance-metrics',
          name: 'reviews-review-analytics-performance-metrics'
        },
        {
          path: '/customer-insights',
          title: 'Customer Insights',
          icon: 'customer-insights',
          name: 'reviews-review-analytics-customer-insights'
        },
        {
          path: '/trends',
          title: 'Trends',
          icon: 'trends',
          name: 'reviews-review-analytics-trends'
        }
      ]
    },
    {
      id: 'review-moderation',
      title: 'Review Moderation',
      nodes: [
        {
          path: '/moderation-queue',
          title: 'Moderation Queue',
          icon: 'moderation-queue',
          name: 'reviews-review-moderation-moderation-queue'
        },
        {
          path: '/spam-detection',
          title: 'Spam Detection',
          icon: 'spam-detection',
          name: 'reviews-review-moderation-spam-detection'
        },
        {
          path: '/content-filters',
          title: 'Content Filters',
          icon: 'content-filters',
          name: 'reviews-review-moderation-content-filters'
        }
      ]
    }
  ]
}

const Home: IRouteGroups = {
  title: 'Home',
  path: '/',
  name: 'home',
  routes: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      nodes: [
        {
          path: '/overview',
          title: 'Overview',
          icon: 'overview',
          name: 'home-dashboard-overview'
        },
        {
          path: '/quick-stats',
          title: 'Quick Stats',
          icon: 'quick-stats',
          name: 'home-dashboard-quick-stats'
        },
        {
          path: '/recent-activity',
          title: 'Recent Activity',
          icon: 'recent-activity',
          name: 'home-dashboard-recent-activity'
        }
      ]
    },
    {
      id: 'quick-actions',
      title: 'Quick Actions',
      nodes: [
        {
          path: '/moderate-reviews',
          title: 'Moderate Reviews',
          icon: 'moderate-reviews',
          name: 'home-quick-actions-moderate-reviews'
        },
        {
          path: '/import-reviews',
          title: 'Import Reviews',
          icon: 'import-reviews',
          name: 'home-quick-actions-import-reviews'
        },
        {
          path: '/view-widgets',
          title: 'View Widgets',
          icon: 'view-widgets',
          name: 'home-quick-actions-view-widgets'
        },
        {
          path: '/manage-coupons',
          title: 'Manage Coupons',
          icon: 'manage-coupons',
          name: 'home-quick-actions-manage-coupons'
        }
      ]
    },
    {
      id: 'notifications',
      title: 'Notifications',
      nodes: [
        {
          path: '/alerts',
          title: 'Alerts',
          icon: 'alerts',
          name: 'home-notifications-alerts'
        },
        {
          path: '/messages',
          title: 'Messages',
          icon: 'messages',
          name: 'home-notifications-messages'
        },
        {
          path: '/system-updates',
          title: 'System Updates',
          icon: 'system-updates',
          name: 'home-notifications-system-updates'
        }
      ]
    }
  ]
}

const routes: IRoutes = [Home, Reviews, Settings];
