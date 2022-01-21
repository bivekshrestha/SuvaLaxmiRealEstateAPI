import Vue from 'vue';
import VueRouter from 'vue-router';
const Dashboard = () => import('./components/Backend/Dashboard');
const Profile = () => import('./components/Backend/Profile');
const Users = () => import('./components/Backend/Users');
const NotFound = () => import('./components/NotFound');
const Home = () => import('./components/Frontend/Home');
const Property = () => import('./components/Frontend/Property');
const Propertyback = () => import('./components/Backend/Propertyback');
const Layout = () => import('./components/Frontend/layout/Layout');
const Login = () => import('./components/Frontend/Login');
const Register = () => import('./components/Frontend/Register');
const ConfirmAccount = () => import("./components/Frontend/helpers/ConfirmAccount");
const PasswordResetForm = () => import("./components/Frontend/helpers/PasswordResetForm");
const ResetPassword = () => import("./components/Frontend/helpers/ResetPassword");
const SingleProperty = () => import('./components/Frontend/SingleProperty');
const Contact = () => import('./components/Frontend/Contact');
const About = () => import('./components/Frontend/About');
const Privacy = () => import('./components/Frontend/Privacy');

// backend
const AdminLogin = () => import('./components/backend/Login');
const AdminDashboard = () => import('./components/backend/AdminDashboard');
const Enquiry = () => import('./components/Backend/Enquiry');
//CMS

const CMSLayout = () => import('./components/Frontend/CMS/layout/CmsLayout');
const CMSDashboard = () => import('./components/Frontend/CMS/Dashboard');
const CMSAddProperty = () => import('./components/Frontend/CMS/Property/AddProperty');
const CMSAllProperties = () => import('./components/Frontend/CMS/Property/AllProperties');
const CMSAllFavorites = () => import('./components/Frontend/CMS/Property/AllFavorites');
const CMSProfile = () => import('./components/Frontend/CMS/Profile');
const FrontEnquiry = () => import("./components/Frontend/CMS/Enquiry/FrontEnquiry");

Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        name: 'Layout',
        redirect: {name: 'home'},
        component: Layout,
        children: [
            {
                path: 'Home',
                name: 'home',
                component: Home,
            },
            {
                path: 'Property/:category?/:purpose?/:location?',
                name: 'property',
                component: Property,
                props:true
            },
            {
                path: 'singleProperty/:id',
                name: 'singleproperty',
                component:SingleProperty,
            },
            {
                path: 'contact',
                name: 'Contact',
                component:Contact,
            },
            {
                path: 'about',
                name: 'About',
                component:About,
            },
            {
                path: 'privacy-policy',
                name: 'Privacy',
                component:Privacy,
            },
            ]
    },
    {
        path: '*',//if none of these components matched Not found loads
        component: NotFound
    },
    {
        path: '/auth/:provider/callback',
        component: {
            template: '<div class="auth-component"></div>'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/confirm/:token',
        name: 'confirm',
        component: ConfirmAccount,
        meta: {
            noLogin: true
        },
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/password-reset-form',
        name: 'password-reset-form',
        component: PasswordResetForm,
        meta: {
            noLogin: true
        },
    },
    {
        path: '/password-reset/:token',
        name: 'password-reset',
        component: ResetPassword,
        meta: {
            noLogin: true
        },
    },

    //below routes for CMS
    {
        path: '/CMS',
        name: 'CMS',
        redirect: { name: 'cmsdashboard' },
        component: CMSLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'cmsdashboard',
                component:CMSDashboard
            },
            {
                path: 'addproperty/:id?',
                name: 'addproperty',
                component:CMSAddProperty
            },
            {
                path: 'allproperties',
                name: 'allproperties',
                component:CMSAllProperties
            },
            {
                path: 'allfavorites',
                name: 'allfavorites',
                component:CMSAllFavorites
            },
            {
                path: 'allfrontenquiries/:id?',
                name: 'allfrontenquiries',
                component:FrontEnquiry
            },
            {
                path: 'cmsprofile',
                name: 'cmsprofile',
                component: CMSProfile,
            }
        ]
    },

    // backend routes
    {
        path: '/laxmiavsuadmin/login',
        name: 'admin-login',
        component: AdminLogin
    },
    {
        path: '/laxmiavsuadmin',
        component: AdminDashboard,
        redirect: {name: 'admin-dashboard'},
        meta: {
            requiresAdminAuth: true
        },
        children: [
            {

                path: '/laxmiavsuadmin/dashboard',
                name: 'admin-dashboard',
                component: Dashboard,
                meta: {
                    auth: undefined
                }
            },
            {
                path: '/laxmiavsuadmin/propertyback',
                name: 'admin-propertyback',

                component: Propertyback,
                meta: {
                    auth: false
                }
            },
            {

                path: '/laxmiavsuadmin/profile',
                name: 'admin-profile',

                component: Profile,
                meta: {
                    auth: false
                }
            },
            {

                path: '/laxmiavsuadmin/users',
                name: 'admin-users',

                component: Users,
                meta: {
                    auth: false
                }
            },
            {
                path: '/laxmiavsuadmin/enquiry',
                name: 'admin-enquiry',
                component: Enquiry,
                meta: {
                    auth: false
                }
            }
        ]

    },
];


const router= new VueRouter({
    routes,
    mode:'history'
});



