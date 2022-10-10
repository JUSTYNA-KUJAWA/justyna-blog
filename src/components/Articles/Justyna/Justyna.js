import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core/";
import Container from "@material-ui/core/Container";
import Button from "../../common/Button/Button";
import styles from "./Justyna.module.scss";

const Justyna = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.postContainer}>
          <img alt="justyna" src="images/mainPage/justithomas.jpg" />
          <div className={styles.infoContainer}>
            <h1>Justi_In_IT</h1>
            <div className={styles.address}>
              <h1>If you would like to share your story please write to me.</h1>
            </div>
            <div className={styles.text}>
              <p>
                Hello everyone, I would like in this article to briefly present
                my story of changing the industry. My name is Justyna, I come
                from the picturesque city of Sochaczew and I am in my thirties.
                <p>
                  I am a financier by education. I love traveling, meeting new
                  people and music. while studying, I dreamed of going abroad
                  and this one of my first dreams came true because while doing
                  my bachelor's degree I went to the Netherlands for my first
                  Erasmus Socrates program. I studied Food Chain Management
                  there for a year and it was an amazing experience for me, but
                  a challenge was won. Get out of your comfort zone and deal in
                  a completely different culture with people from over ten other
                  countries. It so happened that I met my future husband, who is
                  French. If only I knew then what it means to live in a
                  two-cultural family .....
                </p>
                Another great challenge! Basically, I think that my life is one
                big challenge. This is what happened when I landed in France
                without knowing French and encountered a large wall, one through
                which you cannot see anything, you cannot jump up, ask for help.
                All my friends stayed in Poland, one could say such a small
                professional tragedy.
                <p>
                  {" "}
                  I am a brave person, after studying with a million ideas in my
                  head, I suddenly stand still and I can do nothing. Of course,
                  I can learn a language that I don't know, go to college and
                  find a job later, but I didn't feel like studying again, I
                  wanted to work. My master's degree was worth as much as one
                  big nothing there because I didn't speak French. Why am I
                  talking about this, I was supposed to talk about entering the
                  IT industry?{" "}
                </p>
                Because this is where my survival story began, and that's where
                it ended. So far, I have been doing it for: work, children,
                credit, house, etc. At this point, I say stop. I want to do what
                I like, not what is appropriate! For 12 years I have worked as
                an international freight forwarder in French transport
                companies. Just to joke, I would just like to change that in my
                first job I neither spoke French nor knew the map of France. If
                you want, you can learn everything. I learned French by
                listening and maps thanks to drivers and google. Our google
                friend, even years ago, it was a bit different now, if you want,
                you can do everything via the Internet.
                <p>
                  {" "}
                  There has come a time in my life in which I told myself the
                  end, I come to Poland, it's good everywhere, but it's best at
                  home and there is something to it. I was wondering about a
                  year what gives me pleasure and what profession I would like
                  to work in, I decided to enter the IT world. I started
                  searching the internet for courses and chose the bootcamp
                  option from Web Developer.
                </p>
                <p>
                  I am very pleased with this choice because I did not have to
                  quit my job, I did projects in the evenings and at weekends.
                  Trfilam for a very cool lady mentor with whom I worked very
                  well. Why did I like the bootcamp, because it's like the
                  military, no forgive, the job has to be done to move on. Step
                  by step, week by week, you gain confidence and google becomes
                  your best friend. During the bootcamp I had the opportunity to
                  do my own project, work with a project manager and finally
                  make my own frontend and backend website. The best part is
                  that you train all the time on the bootcamp and even if you
                  understand what I was doing only after 2-3 weeks, it is also
                  normal.
                </p>
                <p>
                  {" "}
                  If you are wondering, know one thing you have to dare and get
                  into it. At this point I am starting my blog, it is still in a
                  very limited version, but I know it will be better step by
                  step and I believe that hard work can be successful. Once you
                  enter this world, you want to continue all the time. At this
                  point, I am also doing a Code First Girls course dedicated to
                  women. It's great that there are organizations that support
                  women!
                </p>
                <p>
                  {" "}
                  I am continuing my story. Why is this photo? Because it was
                  made by my best friend who was forced to change her job. In
                  this blog, I would like to support her art work. On my website
                  you have a link to her website, tiktok and instagram, I will
                  start to take a look. I would like to present a photo taken by
                  Mariane to all people invited to the articles.
                </p>
                <p>
                  {" "}
                  I would like to present a photo taken by Mariane to all people
                  invited to the articles.
                </p>
                <p> If you have the questions please write to me.</p>
              </p>
            </div>
            <div className={styles.contactInfo}>
              <h3>Contact info:</h3>
              <p>
                <span>email: justy.kujawa@gmail.com</span>{" "}
              </p>
              <p>
                <span>phone number: 0048 511 561 536</span>{" "}
              </p>
            </div>
            <div className={styles.dates}>
              <p>Published:10-10-2022</p>
            </div>
            <Link to={`/`} className={styles.link}>
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Justyna;
