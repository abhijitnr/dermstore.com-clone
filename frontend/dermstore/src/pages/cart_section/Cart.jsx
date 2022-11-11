import React from "react";
import CartCSS from "./Cart.module.css";

import Checkoutbtn from "../../Components/cart_components/Checkoutbtn";
import Bar from "../../Components/cart_components/Bar";

export function Cart() {
  return (
    <>
      <div className={CartCSS.main}>
        <div className={CartCSS.btnDiv}>
          <h4>Your Cart</h4>
          <Checkoutbtn />
        </div>
        <div className={CartCSS.alert}>
          <Bar />
        </div>
        {/* <div> <Bar props={'green'}/></div> */}
        <div className={CartCSS.items}>
          {/* List Section */}
          <div className={CartCSS.list}>
            <table className={CartCSS.table}>
              <thead className={CartCSS.thead}>
                <tr>
                  <th>items</th>
                  <th>price</th>
                  <th>count</th>
                  <th>subtotal</th>
                </tr>
              </thead>
              <tbody className={CartCSS.tbody}>
                <tr>
                  <td style={{ width: "50%" }}>
                    <img
                      src="https://static.thcdn.com//productimg/70/70/13169882-1944973340032844.jpg"
                      alt=""
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis sed quaerat nulla.
                    </p>
                  </td>
                  <td style={{ width: "10%" }}>
                    <p>$36</p>
                  </td>
                  <td
                    className={CartCSS.count}
                    // style={{ width: "20%", height: "100%" }}
                  >
                    <button>+</button>
                    <div>3</div>
                    <button>-</button>
                  </td>
                  <td
                    className={CartCSS.remove}
                    // style={{ width: "20%", height: "100%" }}
                  >
                    <p>108</p>
                    <button>X</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Offer Section */}
          <div className={CartCSS.offer}>
            <div className={CartCSS.giftSection}>
              <div>
                <h2>Gift Section</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <span>^</span>
            </div>
            <p>Qulification</p>
            <p>Lorem ipsum dolor sit.</p>
            <div className={CartCSS.offerItems}>
              <div>
                <img
                  src="https://static.thcdn.com//productimg/70/70/13169882-1944973340032844.jpg"
                  alt=""
                />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
