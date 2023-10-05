import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default function Chat(){
    
    return (
      <FacebookProvider appId="1806966483069194" chatSupport>
        <CustomChat pageId="145382218653822" minimized={true}/>
      </FacebookProvider>    
    );

}    
  
