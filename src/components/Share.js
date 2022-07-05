import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";
  import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
  } from "react-share";
  import {
    FacebookShareCount,
    HatenaShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount
  } from "react-share";

  function Share() {
    return (
      <div >
        <FacebookShareButton url="https://www.beroapp.com/#Listas" >
                <FacebookIcon size={32} round={true}/>   
        </FacebookShareButton>    
        <TelegramShareButton url="https://www.beroapp.com/" >
            <TelegramIcon size={32} round={true}/>           
        </TelegramShareButton>     
        <TwitterShareButton url="https://www.beroapp.com/" >
            <TwitterIcon size={32} round={true}/>           
        </TwitterShareButton>    
        <WhatsappShareButton url="https://www.beroapp.com/#Listas" >
            <WhatsappIcon size={32} round={true}/>           
        </WhatsappShareButton>    
        <LinkedinShareButton url="https://www.beroapp.com/" >
            <LinkedinIcon size={32} round={true}/>           
        </LinkedinShareButton>  
        
    
        

          
        
      </div>
    )
  }
  
  export default Share

