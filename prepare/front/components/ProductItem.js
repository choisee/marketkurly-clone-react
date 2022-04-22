import React, { useCallback } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import util from "../common/util";
import Link from "next/link";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Item = ({ data }) => {
  const { productsInCart } = useSelector((state) => state.user);

  const onClickCart = useCallback(
    (e) => {
      console.log("장바구니에 추가!" + data.name);
      e.stopPropagation();
      // todo dispatch
    }, [productsInCart]);

  return (
    <>
      <div spacing="16" className="one">
        <Link href={`/productdetail`} as={`/productdetail?goodsno=${data.no}`}>
          <div>
            <div className="two">
              <div className="three">
                <div className="four">
                  <div className="five">
                    <div className="six">
                      <img
                        className="seven"
                        src={data.list_image_url}
                        alt={data.name}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="eight">
                  <button onClick={onClickCart} className="nine">
                    <img
                      className="ten"
                      src="https://res.kurly.com/mobile/service/goods/2010/ico_cart.svg"
                      alt="상품 카트에 담기 아이콘"
                    />
                  </button>
                </div>
              </div>
              <div className="ten-one">
                <div>
                  <div className="ten-two">{data.short_description}</div>
                  <h3 className="ten-three">{data.name}</h3>
                  <div className="ten=four">
                    <div>
                      <div className="ten-five">
                        <div className="ten-six">{data.discount_rate}%</div>
                        <div className="ten-seven">
                          {util.addComma(data.discounted_price)}
                          <span>원</span>
                        </div>
                      </div>
                      <div className="ten-eight">{util.addComma(data.original_price)}원</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default function ProductItem({ data }) {
  const [load, setLoad] = React.useState(true);

  React.useEffect(() => {
    setLoad(false);
    return () => {};
  }, [load]);

  return (
    <>
      {load ? (
        <Skeleton variant="rect" animation="wave" width={228} height={296} />
      ) : (
        <Item data={data} />
      )}
    </>
  );
}

ProductItem.propTypes = {
  data: PropTypes.object.isRequired,
};
Item.propTypes = {
  data: PropTypes.object.isRequired,
};
