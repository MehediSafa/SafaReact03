import React from 'react'
import './footerReusable.css'

import footer_img from '../../assets/footer_img.png'

const FooterReusable = () => {
  return (
    <div className="footer_item">
                    <h2>Immediate Deployment</h2>
                    <p>Et vero eos et accusamus et 
                    iusto odio dignissimos</p>
                    <div className="footer_line">
                        
                        <div className="line">
                            
                        </div>
                    </div>
                    <div className="footer_img">
                        <img src={footer_img} alt="" />
                    </div>
                </div>
  )
}

export default FooterReusable