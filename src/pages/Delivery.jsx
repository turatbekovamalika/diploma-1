import "./Delivery.css";

export default function Delivery() {
  return (
    <div className="Container">
      <div className="Delivery">
        <h1>how can you arrange delivery?</h1>
        <div className="Row">
          <div className="Col-4">
            <div className="First">
              <h1>1</h1>
              <p>
                first, to order, select <br />
                the product that you liked <br />
                in the basket so as not to <br />
                lose it
              </p>
            </div>
          </div>
          <div className="Col-4">
            <div className="First">
              <h1>2</h1>
              <p>
                secondly, go to the <br />
                shopping cart and make <br />
                sure that you have chosen <br />
                exactly what you wanted
              </p>
            </div>
          </div>
          <div className="Col-4">
            <div className="First">
              <h1>3</h1>
              <p>
                in the third register, <br />
                specify your address, <br />
                email and phone number <br />
                for the order
              </p>
            </div>
          </div>
        </div>
        <div className="AboutDelivery">
          <p>
            Once you have met all three points, you can expect your order <br />
            Delivery is carried out during the day in the city and during the
            week in other regions <br />
            thank you for your purchase, wait for your order!!! <br />
          </p>
          <div className="HaveNiceDay"> HAVE A NICE DAYI!</div>
        </div>
      </div>
    </div>
  );
}
