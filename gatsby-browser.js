import {Layout} from '$components';

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This tutorial has been updated. ` +
    `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
export const wrapPageElement = ({element, props}) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  );
}
