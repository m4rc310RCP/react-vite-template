import { createContext, type FC, type PropsWithChildren, useContext, useEffect, useState } from "react";
import { createUpdateValue } from '@core/general.v1';

interface IMainValues {
	title: string;
	changeTitle: (title:string) => void;
}
const defaultValue: IMainValues = {} as IMainValues;

const MainContext = createContext<IMainValues>(defaultValue);

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	const [value, setValue] = useState<IMainValues>(defaultValue);
	const update = createUpdateValue(setValue);

	useEffect(()=>{
		update('changeTitle', (title: string)=>{
			update('title', title)
		});
	}, []);

	return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

const useMain = () => useContext(MainContext);

export { MainProvider, useMain };