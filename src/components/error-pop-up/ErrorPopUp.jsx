import { ErrorMessage, StyledErrorPopUp } from './styles';

const ErrorPopUp = ({ children }) => {
	return (
		<StyledErrorPopUp>
			<ErrorMessage>{children}</ErrorMessage>
		</StyledErrorPopUp>
	);
};

export default ErrorPopUp;
