import { SectionDiv, Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionDiv>
      <Title>{title}</Title>
      <>{children}</>
    </SectionDiv>
  );
};

Section.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
