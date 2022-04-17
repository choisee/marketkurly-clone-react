import React from "react";

export default function Qna() {
	return (
		<div className="qna_wrap">
			<div className="qna_text">제목</div>
			<div>
				<input type="text" className="inpSt1" placeholder="제목을 입력해주세요 (최대 50자)" />
			</div>
			<div className="qna_text">판매자에게 문의할 내용</div>
			<div>
				<textarea
					className="inpSt1"
					placeholder="문의 내용을 작성해 주세요. 최대(1,000자)"></textarea>
			</div>
			<div className="qna_text">아래 메일에서도 답변 받으실 수 있습니다.</div>
			<div>
				<input type="text" className="inpSt1" placeholder="이메일을 입력해주세요." />
			</div>
			<button className="btn_submit">등록완료</button>
			<div>
				<li className="qna_text_grey">- 작성하신 문의확인 서비스는 준비 중 입니다.</li>
				<li className="qna_text_grey">- 부적절한 문의내용일 경우 무통보 삭제될 수 있습니다.</li>
			</div>
		</div>
	);
}
