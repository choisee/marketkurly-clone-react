import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Qna from "../components/Qna";
import Loading from "../components/Loading";
import DetailPhotos from "../components/DetailPhotos";
import DetailInfo from "../components/DetailInfo";
import DetailMenu from "../components/DetailMenu";
import TabProductInfo from "../components/TabProductInfo";
import TabProductReview from "../components/TabProductReview";
import { detail_01 } from "../data/DummyDetail";
import PropTypes from "prop-types";
import BottomWrapper from "../components/BottomWrapper";
import HeaderWrapper from "../components/HeaderWrapper";

function getLists() {
  return [detail_01];
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className="nav-tabpanel"
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}>
      {value === index && <div p={3}>{children}</div>}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
  },
}));

const Productdetail = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(getLists()[0]);
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setLoading(false);
    return () => {};
  }, []);

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {/* 헤더 */}
          <HeaderWrapper type="Detail" />

          {/* 메인 */}
          <div>
            {/* 상품사진 */}
            <DetailPhotos data={data} />
            {/* 설명 */}
            <DetailInfo data={data} />
            {/* 설명 > 탭메뉴 */}
            <DetailMenu value={value} data={data} handleTabChange={handleTabChange} />

            {/* 설명 > 탭메뉴 > 탭별 상세화면 */}
            <TabPanel value={value} index={0}>
              <TabProductInfo />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <TabProductReview data={data.review} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Qna />
            </TabPanel>
          </div>

          {/* 하단고정메뉴 */}

          <BottomWrapper type="Detail" />
        </div>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Productdetail;
