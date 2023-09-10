import { BUTTONS } from '../../constants/buttons';
import {
	PrimaryButton,
	SecondaryButton,
	SocialButton,
	SocialIcon
} from './styles';

const Button = ({ type, action, children, icon }) => {
	switch (type) {
		case BUTTONS.PRIMARY:
			return <PrimaryButton onClick={action}>{children}</PrimaryButton>;
		case BUTTONS.SOCIAL:
			return (
				<SocialButton onClick={action}>
					<SocialIcon {...icon} />
					{children}
				</SocialButton>
			);
		case BUTTONS.SECONDARY:
			return <SecondaryButton onClick={action}>{children}</SecondaryButton>;
		default:
			break;
	}
};

export default Button;
