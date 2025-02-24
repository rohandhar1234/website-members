import PropTypes from 'prop-types';
import classNames from 'components/not-found-page/not-found-page.module.scss';
import { membersContext } from 'store/members/members-context';

const Index = () => {
  const {
    state: { errorMsg }
  } = membersContext();
  return (
    <div className={classNames.fullPageContainer}>
      <img
        src="/images/page-not-found.png"
        alt="page not found"
        className={classNames.notFoundImage}
      />
      <p className={classNames.errorTxt}>{errorMsg}</p>
    </div>
  );
};

Index.propTypes = {
  errorMsg: PropTypes.string
};

Index.defaultProps = {
  errorMsg: ''
};

export default Index;
