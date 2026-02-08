import React from 'react';
import Typography from '@mui/material/Typography';
import AbrahamAvatarCard from '../AbrahamAvatarCard';

const ThankYou = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Thanks very much!
      </Typography>
      <Typography variant="inherit">
        Thank you so much for wanting to try out Neublio! I will get back to you as soon as
        possible so you can begin trying this app out.
        <br />
        <br />
        If you have other project leaders in your network, please consider inviting them to join our
        tester community by tweeting it out below, or sharing a link to this site. More people
        equals more feedback. More feedback equals a better final app for all.
      </Typography>
      <div className="my-2">
        <a
          href="https://twitter.com/intent/tweet?text=Neublio+app+is+a+new+self-hosted+knowledge+work+assistance+tool+that+helps+you+get+stuff+done+faster+with+others.+%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5+Check+it+out+at%3A+https%3A%2F%2Fneublio.com+%23productivity+%23neublio+"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet it out
        </a>
      </div>
      <AbrahamAvatarCard>
        Thank you again for joining this project of mine! Please reach out if you have any questions. I am all ears!
      </AbrahamAvatarCard>
    </>
  );
};

export default ThankYou;
