import { BsHeart } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { AiOutlineHome} from 'react-icons/ai';
import { FiBox } from 'react-icons/fi';
import { MdOutlineErrorOutline } from 'react-icons/md';
import draw from '../../assets/styles/sidemenu/Drawer.module.css';
import menu from '../../assets/styles/common/Socialfollow.module.css';


export const app={
    name:'e-Commerce'
}

export const sidebarMenu = [
    {
        name: 'Home',
        link:'/',
        icon: <AiOutlineHome className={draw.linkIcon}/>
    },
    {
        name: 'Products',
        link:'/products',
        icon: <FiBox className={draw.linkIcon} />,
    },
    {
        name: 'Wishlist',
        link:'/wishlist',
        icon: <BsHeart className={draw.linkIcon} />
    }
];

export const sociallink = [
    {
        link: 'Facebook',
        path: '',
        icon: <FaFacebookF className={menu.socialIcon} />
    },
    {
        link: 'Linkedin',
        path: '',
        icon: <FaLinkedinIn className={menu.socialIcon} />
    },
    {
        link: 'Instagram',
        path: '',
        icon: <FaInstagram className={menu.socialIcon} />
    }
];

export const slider = [
    { url: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Fslider%2F01.jpg?alt=media&token=6373416d-f9ee-4a3d-b6cb-87f6e02e3a1e', alt: 'random' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Fslider%2F02.jpg?alt=media&token=41b639fb-205d-4e6e-b914-4bd26cf91c6b', alt: 'random' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Fslider%2F03.jpg?alt=media&token=a4f9e5f4-ee4e-48cf-9772-d907b2da7a7e', alt: 'random' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Fslider%2F04.jpg?alt=media&token=c47a5d1b-068f-49ec-8566-4175c575607e', alt: 'random' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Fslider%2F05.jpg?alt=media&token=d2d54d72-0229-4f63-84e3-eb837d47c140', alt: 'random' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Fslider%2F06.png?alt=media&token=2c75c41d-03f4-48b8-8de3-d0c5efc84d03', alt: 'random' }
];

export const mainCategory = [
    { id: 'grfb', name: 'Groceries', type: 'Foods and Beverages', link:'/groceries' },
    { id: 'pffb', name: 'Packaged Foods', type: 'Foods and Beverages', link:'/packagefoods' },
    { id: 'bfb', name: 'Beverages', type: 'Foods and Beverages', link:'/beverages' },
    { id: 'menf', name: 'Men', type: 'Fashion', link:'/men' },
    { id: 'womf', name: 'Women', type: 'Fashion', link:'/women' },
    { id: 'mobp', name: 'Mobile Phones', type: 'Mobiles', link:'/mobiles/' },
    { id: 'elect', name: 'Electronics', type: 'Electronics', link:'/electronics/' }
];
export const widgets = {
    foods: [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Foffers%2Fgroceriesoffers.jpg?alt=media&token=2d471702-8a05-4fff-8aa4-edad61a364ae',
            alt: 'Foods & Groceries'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Foffers%2Fpackfoodsoffers.jpg?alt=media&token=a374bc65-fdc8-4e53-919a-3904dc4284d4',
            alt: 'Foods & Groceries'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Foffers%2Fpackfoodsoffers2.jpg?alt=media&token=b767f5b3-bebf-4b8f-9406-567fc348ab24',
            alt: 'Foods & Groceries'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Foffers%2Fpackfoodsoffers3.jpg?alt=media&token=38cbf8d0-7cd1-4e17-8c7a-f271c381a042',
            alt: 'Foods & Groceries'
        }

    ],
    fashion: [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Foffers%2Ffashionoffers.png?alt=media&token=7ef6f087-79d9-448f-9be7-bda5ceb2f53d',
            alt: 'Fashion Offers'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Foffers%2Ffashionoffers2.png?alt=media&token=9e84b768-a1d3-4e37-ab49-a0ec2d31fdf7',
            alt: 'Fashion Offers'
        }
    ]
};

export const prodCategory = [
    {
        id: 'Mbs',
        name: 'Mobiles',
        type: 'Mobiles',
        image: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Fcategory%2Fmobilecatg.jpg?alt=media&token=c72b10ec-0149-4053-9025-2eb0adb5a20e',
        link:'/mobiles'
    },
    { 
        id: 'Elc', 
        name: 'Electronics', 
        type: 'Electronics', 
        image: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Fcategory%2Felectronicscatg.jpg?alt=media&token=44ff4e7f-cddd-4afe-abc0-f04c5698b447', 
        link:'/electronics'
    },
    { 
        id: 'Gro', 
        name: 'Groceries', 
        type: 'Groceries', 
        image: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Fcategory%2Fgroceriescatg.png?alt=media&token=9fe96b79-47bd-496c-87d4-ed016f4273f0', 
        link:'/groceries'
    },
    { 
        id: 'PkgFB', 
        name: 'Packaged Foods', 
        type: 'Foods and Beverages', 
        image: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Fcategory%2Fpackfoodscatg.png?alt=media&token=1f019e9b-d5a4-43c0-9159-8ba5e117aa64', 
        link:'/packagedfoods'
    },
    { 
        id: 'Fsn', 
        name: 'Fashion', 
        type: 'Clothing & Wear', 
        image: 'https://firebasestorage.googleapis.com/v0/b/ecomm-store-22.appspot.com/o/assets%2Fimages%2Fcategory%2Ffashioncatg.jpg?alt=media&token=f7533984-f9b7-47b1-ab2d-ce73587217ce', 
        link:'/men'
    }
]

export const shopForm={
    delivery:{
        name:'Name',
        phone:'Alternate Phone',
        house:'House/Flat No.',
        area:'Street/Area/Locality',
        city:'City',
        state:'State',
        pin:'Pincode'
    },
    placeholder:{
        name:'Tarun Mishra',
        phone:'9876543210',
        house:'B-606',
        area:'Mayur Vihar',
        city:'Delhi',
        state:'Delhi',
        pin:'110091'
    }
}


// india states for dropdown menu
export const indiaState=[
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura', 
    'Uttar Pradesh', 
    'Uttarakhand', 
    'West Bengal'
  ]


export const signIn = {
    heading: 'Sign in',
    errorIcon: <MdOutlineErrorOutline className='mdError' />,
    usernameLabel: 'Email',
    passwordLabel: 'Password',
    psdPlaceholder: 'Enter your password',
    namePlaceholder: 'Enter your email'
};

export const signUp = {
    heading: 'Sign up',
    usernamePlaceholder: 'Name',
    phonePlaceholder: 'Mobile No.',
    emailPlaceholder: 'Email',
    psdPlaceholder: 'Password',
    psd2Placeholder: 'Repeat Password'

};


export const filterConstants={
    products:[
        {
            id:1,
            checked:false,
            label:'3+',
            value:3
        },
        {
            id:2,
            checked:false,
            label:'4+',
            value:4
        },
        {
            id:3,
            checked:false,
            label:'5',
            value:5
        },
    ],
    groceries:[
        {
            id:1,
            checked:false,
            value:'Pulses',
            label:'Pulses'
        },
        {
            id:2,
            checked:false,
            value:'Rice',
            label:'Rice'
        },
        {
            id:3,
            checked:false,
            value:'Sugar',
            label:'Sugar'
        },
        {
            id:4,
            checked:false,
            value:'Atta',
            label:'Atta'
        },
    ],
    electronics:[
        {
            id:1,
            value:'Laptop',
            label:'Laptop',
            checked:false,
    
        },
        {
            id:2,
            value:'TV',
            label:'TV',
            checked:false,
        },
        {
            id:3,
            value:'AC',
            label:'AC',
            checked:false,
        },
        {
            id:4,
            value:'Earphone',
            label:'Earphone',
            checked:false,
        },
    ],
    mobiles:[
        {
            id:1,
            value:'Samsung',
            label:'Samsung',
            checked:false,
    
        },
        {
            id:2,
            value:'Apple',
            label:'Apple',
            checked:false,
    
        },
        {
            id:3,
            value:'Redmi',
            label:'Redmi',
            checked:false,
        },
    ],
    men:[
        {
            id:1,
            value:'Jeans',
            label:'Jeans',
            checked:false,
        },
        {
            id:2,
            value:'T-shirts',
            label:'T-shirts',
            checked:false,
        },
    ],
    women:[
        {
            id:1,
            value:'Top',
            label:'Top',
            checked:false,
        },
        {
            id:2,
            value:'Kurti',
            label:'Kurti',
            checked:false,
        },
    ],
    beverages:[
        {
            id:1,
            value:'Cold Drink',
            label:'Cold Drink',
            checked:false,
        },
        {
            id:2,
            value:'Coffee',
            label:'Coffee',
            checked:false,
        },
    
    ],
    packagedfoods:[
        {
            id:1,
            value:'Biscuits',
            label:'Biscuits',
            checked:false,
        },
        {
            id:2,
            value:'Snacks',
            label:'Snacks',
            checked:false,
        },
        {
            id:3,
            value:'Noodles',
            label:'Noodles',
            checked:false,
        },
    ],
    }
    
    