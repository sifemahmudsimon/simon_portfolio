  export async function GET() {
    const projects ={
        title:'Projects',
        sub:'spotlight',
        data:[
          {
            category:[1],
            bannerimage:'/projectimage/sundarban.png',
            company:'Sundarban',
            title:'Shundarban Courier Service Ltd',
            subtitle:'Parcel Tracking System',
            description:'This project is an enhanced version that integrates a user and corporate parcel tracking system, supporting both national and international shipments. It has been designed using a combination of Tailwind CSS and the MUI library for a modern and responsive user interface. The core architecture is built with React and Next.js, utilizing the Next.js App Router for efficient routing and optimizaation.',
            stacks:[],
            url:'/sundarban',
            link:''
          },
          {
            category:[1,3],
            bannerimage:'/projectimage/skitto.png',
            company:'SKITTO',
            title:'Skitto (Revamp)',
            subtitle:'project by Grameenphone',
            description:'This project focused on the complete redevelopment of skitto.com, transitioning it from a legacy website into a modern, feature-rich platform utilizing cutting-edge technologies. The redesign prioritized enhancing user experience, boosting performance, and incorporating dynamic features to address evolving user needs.',
            stacks:[],
            url:'/skitto-revamp',
            link:''
          },
          {
            category:[1,4,5],
            bannerimage:'/projectimage/gpfi.jpg',
            company:'Grameenphone',
            title:'GpFi (Revamp)',
            subtitle:'project by Grameenphone',
            description:'',
            stacks:[],
            url:'/grameenphone-gpfi',
            link:'https://gpfi.grameenphone.com'
          },
          
        ]
      }
  
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }