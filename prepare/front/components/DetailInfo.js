import React from "react";
import util from "../common/util";
import PropTypes from "prop-types";

export default function DetailInfo({ data }) {
  return (
    <div className="sectionView">
      {/* 설명 > 제품정보*/}
      <p className="goods_name">
        <span className="btn_share">
          <button id="btnShare" data-goodsno={data.prdId}>
            공유하기
          </button>
        </span>
        <strong className="name">{data.prdTitle}</strong>
        <span className="short_desc">{data.prdDesc}</span>
      </p>
      <p className="goods_dcinfo">회원할인가</p>
      <p className="goods_price">
        <span className="position">
          <span className="dc">
            <span className="dc_price">
              {util.addComma(data.discount)}
              <span className="won">원</span>
            </span>
            <span className="dc_percent">
              {data.discountPercent}
              <span className="per">%</span>
            </span>
          </span>
          <span className="original_price price">
            {util.addComma(data.price)}
            <span className="won">원</span>
          </span>
        </span>
        <span className="not_login">
          <span>로그인 후, 회원할인가와 적립혜택이 제공됩니다.</span>
        </span>
      </p>

      {/* 설명 > 제품특이사항 */}
      <div className="goods_info">
        <dl className="list fst">
          <dt className="title">판매단위</dt>
          <dd className="description">1팩</dd>
        </dl>
        <dl className="list">
          <dt className="title">중량/용량</dt>
          <dd className="description">40g</dd>
        </dl>
        <dl className="list">
          <dt className="title">배송구분</dt>
          <dd className="description"> 샛별배송/택배배송</dd>
        </dl>
        <dl className="list">
          <dt className="title">포장타입</dt>
          <dd className="description">
            {" "}
            상온/종이포장{" "}
            <strong className="emph"> 택배배송은 에코포장이 스티로폼으로 대체됩니다. </strong>
          </dd>
        </dl>
        <dl className="list">
          <dt className="title">알레르기정보</dt>
          <dd className="description">
            - 소고기, 대두, 밀 함유
            <br />- 돼지고기, 토마토, 우유 와 같은 시설에서 생산
          </dd>
        </dl>
      </div>
    </div>
  );
}

DetailInfo.propTypes = {
  data: PropTypes.object.isRequired,
};
