import React from "react";
import { Section } from "./Section";

export default function SectionWrapper({ data }) {
	return (
		<>
			{data.map((v) => (
				<div key={v.id} className="section_wrapper">
					<a className="section_title">
						<h2 className="section_text">
							<span>{v.title}</span>
						</h2>
					</a>
					<Section data={v.section} />
				</div>
			))}
		</>
	);
}
