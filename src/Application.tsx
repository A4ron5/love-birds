import * as React from "react";

import { Pages } from "pages/index";
import { AppGate } from "features/common/model";

const Application = () => (
	<>
		<AppGate />
		<Pages />
	</>
);

export default Application;
