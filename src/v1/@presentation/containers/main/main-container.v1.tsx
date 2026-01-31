import { useEffect, type FC, type HtmlHTMLAttributes } from "react";
import { useMain } from '@presentation/contexts'
import { m } from '@presentation/i18n/locale-i18n.v1'

export const MainContainer: FC<
  HtmlHTMLAttributes<unknown>
> = (props) => {
  const { ...rest } = props;

	const { title } = useMain();

	useEffect(()=>{
		window.document.title = title || m.app_default_title;
	}, [title]);

  return (
    <div {...rest}>
      <h1>MainContainer</h1>
    </div>
  );
};
