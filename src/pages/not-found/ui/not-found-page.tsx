import "./styles.less";

import { FC } from "react";

import { NotFoundWidget } from "@widgets/not-found/ui";
import { DefaultLayout } from "@widgets/layout/default/ui";

export const NotFoundPage: FC = () => {
	return (
		<DefaultLayout>
			<DefaultLayout.Main>
				<NotFoundWidget />
			</DefaultLayout.Main>
		</DefaultLayout>
	);
};
