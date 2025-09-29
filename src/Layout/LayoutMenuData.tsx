import { Award, CalendarDays, CircuitBoard, Codesandbox, FileText, LifeBuoy, LocateFixed, Mail, Map, MessageSquare, MonitorDot, PackagePlus, PictureInPicture2, PieChart, RadioTower, ScrollText, Share2, ShoppingBag, Table, Trophy, UserRound } from "lucide-react";

const menuData: any = [
    {
        id: "dashboard",
        label: 'Dashboards',
        link: "/#",
        icon: <MonitorDot />,
    },
    
    {
        id: 'enquiry',
        label: 'Enquiry',
        icon: <MessageSquare />,
        link: '/enquiry',
        parentId: 2
    },
    {
        id: 'site',
        label: 'Site/Project',
        icon: <Mail />,
        link: '#',
        parentId: 2
    },
    {
        id: 'customer',
        label: 'Customer Network',
        link: "/#",
        icon: <CalendarDays />,
        subItems: [
            {
                id: 'default',
                label: 'Default',
                link: '#',
                parentId: 'calendar'
            },
            {
                id: 'monthgrid',
                label: 'Month Grid',
                link: '#',
                parentId: 'calendar'
            },
            {
                id: 'multimonth',
                label: 'Multi Month Stack',
                link: '#',
                parentId: 'calendar'
            }
        ]
    },
    {
        id: "orders",
        label: 'Orders',
        link: "/#",
        icon: <ShoppingBag />,
        subItems: [
            {
                id: 'product',
                label: 'Products',
                parentId: 'ecommerce',
                subItems: [
                    {
                        id: 'listview',
                        label: 'List View',
                        link: '#',
                        parentId: 'product'
                    },
                    {
                        id: 'gridview',
                        label: 'Grid View',
                        link: '#',
                        parentId: 'product'
                    },
                    {
                        id: 'overview',
                        label: 'Overview',
                        link: '#',
                        parentId: 'product'
                    },
                    {
                        id: 'addnew',
                        label: 'Add New',
                        link: '#',
                        parentId: 'product'
                    },
                ]
            },
            {
                id: 'shoppingcart',
                label: 'Shopping Cart',
                link: '#',
                parentId: 'ecommerce'
            },
            {
                id: 'checkout',
                label: 'Checkout',
                link: '#',
                parentId: 'ecommerce'
            },
            {
                id: 'order',
                label: 'Orders',
                link: '#',
                parentId: 'ecommerce'
            },
            {
                id: 'orderoverview',
                label: 'Order Overview',
                link: '#',
                parentId: 'ecommerce'
            },
            {
                id: 'sellers',
                label: 'Sellers',
                link: '#',
                parentId: 'ecommerce'
            },
        ]
    },
    {
        id: "attendance",
        label: 'Attendance',
        icon: <CircuitBoard />,
        parentId: "hrmanagement",
        link: "/#",
    },
    {
        id: 'map',
        label: 'Map',
        icon: <ScrollText />,
        link: '#',
        parentId: 2
    },
    {
        id: 'checkin',
        label: 'CheckIn',
        icon: <RadioTower />,
    },
    {
        id: 'leave',
        label: 'Leave',
        icon: <FileText />,
        parentId: 2,
    },
    {
        id: 'travel',
        label: 'Travel Plan',
        icon: <UserRound />,
        parentId: 2,
        subItems: [
            {
                id: 'userlistview',
                label: 'List view',
                link: '#',
                parentId: 'users'
            },
            {
                id: 'usergridview',
                label: 'Grid View',
                link: '#',
                parentId: 'users'
            }
        ]
    },
    {
        id: 'followup',
        label: 'FollowUp',
        icon: <Award />,
        parentId: 2,
        
    },
    {
        id: 'announcements',
        label: 'Announcements',
        icon: <Codesandbox />,
        parentId: 2,
    },
    {
        id: "expense",
        label: 'Expense',
        link: "/#",
        icon: <LifeBuoy />,
    },
    {
        id: 'quotation',
        label: 'Plugins',
        icon: <PackagePlus />,
    },
   

];

export { menuData };