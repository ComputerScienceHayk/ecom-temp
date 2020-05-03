import React from "react";

//images import
import env from "../images/env.png";
import help from "../images/comment.png";

function Footer() {
  return (
    <div className="cont">
      <footer>
        <div className="left" />
        <div className="main">
          <div className="up">
            <div className="info">
              <ul>
                <li>Գլխամաս՝ ՀՀ, Երևան, Հյուսիսային պողոտա 1</li>
                <li>Հեռախոսահամար՝ +374 11 900-800</li>
                <li>էլ. հասցե՝ info@zigzag.am</li>
                <li className="soc-wrapper">Գտե՛ք մեզ սոցցանցերում
                  <div className="soc">
                    <a href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </div>
                  <div className="soc">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                  <div className="soc">
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="menu1">
              <ul>
                <li>Վաճառասրահներ</li>
                <li>Ծառայություններ</li>
                <li>Ակցիաներ</li>
                <li>Հետադարձ կապ</li>
              </ul>
            </div>
            <div className="menu2">
              <ul>
                <li>Նվեր-քարտ</li>
                <li>Հետադարձ կապ</li>
              </ul>
            </div>
            <div className="send-mail-wrapper">
              <p>Գրանցվեք նորությունների համար</p>
              <div className="send-mail">
                <input type="email" placeholder="էլ․հասցե" />
                <div className="env-wrapper">
                  <img src={env} alt="env" />
                </div>
              </div>
            </div>
          </div>
          <div className="down">
            <div className="rights">
              <p>© 2016 Mobitec Online Բոլոր իրավունքները պաշտպանված են</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="helper">
            <div className="help">
              Օգնություն
            </div>
            <div className="help-button">
                <img src={help} alt="helper"/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
