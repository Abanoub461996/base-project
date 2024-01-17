import { useDispatch } from 'react-redux';
import { closeLoader, showLoader } from '../../core/store/slices/loaderSlice';

const Home = () => {
	const dispatch = useDispatch();


	const handleSearch = () => {
		dispatch(showLoader({show: true}));
	};
	return (
		<div>
			<button type="button" onClick={handleSearch}>
				setLoader
			</button>
			<button type="button" onClick={()=>dispatch(closeLoader())}>
				close Loader
			</button>
		</div>
	);
};

export default Home;
