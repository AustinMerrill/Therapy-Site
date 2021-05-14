import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HeroImage from "../images/woman.jpeg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import BlockContent from "@sanity/block-content-to-react"

// need for blockText content
const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

const IndexPage = ({ data }) => {
  console.log("hello", data)
  const mainImage =
    data.allSanityHomePage.nodes[0].mainImage.asset.gatsbyImageData

  const aboutYou = data.allSanityHomePage.nodes[0]._rawAboutYou

  const aboutMe = data.allSanityHomePage.nodes[0]._rawAboutMe

  console.log(aboutYou)
  return (
    <Layout>
      <SEO title="Home" />
      {/* Hero section */}
      <div className="md:flex  md:space-x-8 space-y-4 md:space-y-0">
        {/* image */}
        <div>
          <GatsbyImage
            image={mainImage}
            className="object-cover w-full rounded-lg max-h-96 md:min-h-full "
          />
        </div>
        {/* big text */}
        <div className="border-8 rounded-lg py-3 px-8 border-coral w-full md:h-auto md:min-h-96">
          <h2 className="text-5xl tracking-wide ">
            THERAPY FOR THE MILLENNIAL WOMAN WHO *MOSTLY* HAS HER SHIT TOGETHER
            <br />
            <span className="text-base">
              ...WITH A FEW LOSSE ENDS HOLDING HER BACK FROM 100% FULFILLMENT
            </span>
          </h2>
          <div className="lg:flex md:justify-between mt-8 mb-8 space-x-10 hidden">
            <p>Approachable</p>
            <p>Nonjudgemental</p>
            <p>Transformative</p>
          </div>
        </div>
      </div>
      {/* About You Section */}
      {/* First picture overlap section */}
      <div className="mt-10 relative block bg-teal">
        {/* extra blue */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-white z-0"></div>
        <div className="p-5">
          <BlockContent blocks={aboutYou} serializers={serializers} />
        </div>
        {/* <h2 className="font-semibold text-3xl" id="about">
          About You <br />{" "}
          <span className="text-base font-normal">(...and more)</span>
        </h2>
        <div className=" p-5  r">
          <h2>YEAH, YOU!</h2>
          <p>
            You're a millennial woman who has her shit together. You're
            ambitious with your career, education, and/or life goals, you have
            big ideas, you try to do some self-care every once in a while. You
            really are pretty well put together.
            <br />
            <br /> You're a badass. (Yes, you are. Time to start believing
            that.)
            <br />
            <br /> But there are just those frustrating loose ends that keep you
            from feeling your best. You're not very nice to yourself when you
            make a mistake. You often want to say more or stand up for yourself,
            but hold back. You worry about everything. EVERYTHING. You look at
            social media and immediately feel FOMO. You don't feel like you're
            keeping up with people. And it sucks to feel that way. You've been
            called a people-pleaser before and you don't disagree. You'd like to
            put yourself higher on your priority list, but it just seems
            impossible. <br />
            <br />
            Your goal is to be successful and happy, but you can't seem to get
            there. ​Therapy has maybe crossed your mind, but you felt it was too
            drastic. It's not. It's just what you need.
          </p> */}
        {/* </div> */}
        <div className="z-10 relative">
          <div className="flex justify-center">
            <img
              className="h-40 w-40 z-10 "
              src="https://images.unsplash.com/photo-1574279606130-09958dc756f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
              alt="people"
            />
            <img
              className="h-40 w-40 z-10 "
              src="https://images.unsplash.com/photo-1574279606130-09958dc756f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
              alt="people"
            />
          </div>

          {/* <div className="absolute bottom-0 h-24 bg-coral inset-x-0 z-0"></div> */}
        </div>
      </div>
      {/* Next section we are trying to create overlap */}
      <div className="bg-coral p-5 relative">
        {/* <div className="absolute inset-x-0 -top-24 h-24 bg-coral z-0"></div> */}
        <div className="absolute inset-x-0 z-0 h-12 -top-12 bg-coral border-8 border-green-400"></div>
        {/* put orange on bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 border-8 bg-teal z-0"></div>
        <div>
          <div className="p-5">
            <BlockContent blocks={aboutMe} serializers={serializers} />
          </div>
          {/* <h2>OKAY, A BIT ABOUT ME </h2>
          <p>
            I'm not your typical therapist. I'm real. I'm approachable. I have a
            potty mouth too. And I don't think therapy should be some stale,
            clinical, sterile experience. That sounds like a real shitty therapy
            experience to me! I don't just put "approachable, nonjudgmental,
            transformative" at the top of my page to be showy. I truly practice
            with those things in mind. I may have gone through lengthy and
            specific education/training to be in the role I'm in, but that
            doesn't make me any better than you or the "expert" of your life.
            You're the expert of your life... I am just trained and skilled at
            using naturally flowing conversation to elicit the change you're
            seeking. Judgement has no place in therapy. Period. I am honored you
            choose to trust me, so no way am I going to tarnish that and ruin
            the therapeutic relationship with judging you. Finally, if you put
            in the time, the effort, and the work during the therapy process,
            you will absolutely be transformed. ​I'm willing to invest in you...
            are you ready to invest in yourself? (If you care about the more
            clinical stuff like my treatment modality, I practice from a
            generally Rogerian standpoint and I pull primarily from Acceptance
            and Commitment Therapy as well as Cognitive Behavioral Therapy with
            some Motivational Interviewing thrown in there. Feel free to ask
            more questions about this if you'd like!)
          </p> */}
          <div className="flex mt-10 space-x-4 align-center">
            <div className="w-1/2">
              <h2>Eduction</h2>
              <ul className="list-disc">
                <li>Clemson University, Master's</li>
                <li>Clinical Mental Health Counseling</li>
                <li>UNC Wilmington, Bachelor's</li>
                <li>Psychology​</li>
                <li>Licensed Professional Counselor​</li>
                <li>Board Certified National Certified Counselor</li>
              </ul>
            </div>
            <div className="mb-10 w-1/2">
              <h2>AREAS OF FOCUS</h2>
              <ul className="list-disc">
                <li>Self-compassion and being hard on yourself</li>
                <li>Anxiety and excessive worry</li>
                <li>People-pleasing and being the "fixer"</li>
                <li>Lack of general fulfillment and meaning</li>
                <li>Perfectionism</li>
                <li>The every day difficulties that holds you back</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="z-10 border-8 relative flex justify-between">
          <img
            src="https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt="lady on computer"
            className="w-60 h-60 "
          />
          <img
            src="https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt="lady on computer"
            className="w-60 h-60 "
          />
        </div>
      </div>

      <div className="bg-teal relative">
        <div className="absolute inset-x-0 z-0 h-12 -top-12 bg-teal border-8 border-green-400"></div>
        <div className="bg-teal p-5">
          <h2 id="specialties">Services Offered</h2>
          <h3>Individual Therapy Sessions</h3>
          <p>
            I provide 60-minute individual therapy sessions to adults ages 18
            and up. Typically, I meet with clients on a weekly basis, though due
            to scheduling needs and other factors, this may vary. Expecting
            weekly sessions is a good start, but we can discuss what works best
            for you. Online Therapy This means you get all therapy services (ya
            know, the approachable, nonjudgmental, transformative stuff) all
            online while you sit on your own couch rather than mine! You have
            access to live video sessions on a secure platform. This means my
            services are offered STATEWIDE and for those of you who may have
            difficulty accessing services or may have physical limitations that
            make office visits a struggle... I've got therapy for you!
          </p>
          <h2 id="fee">FINANCES</h2>
          <h3>Rates:</h3>
          <p>
            15-minute phone consult: Free60-minute therapy session: $165.00 All
            paperwork is completed electronically.{" "}
            <span>
              I do not accept insurance, but I do provide documentation for
              out-of-network benefits. (I cannot provide documentation for
              Tricare.)
            </span>
          </p>
        </div>
      </div>
      <div>
        <h1 id="contact">CONTACT ME</h1>
        {/* map */}
        <div>
          <h2>MAP</h2>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.6961597944105!2d-98.49907884901566!3d29.496061051134916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f50380dacfb%3A0x28ccfdad607f4ae9!2s215%20Jackson%20Keller%20Rd%2C%20San%20Antonio%2C%20TX%2078216!5e0!3m2!1sen!2sus!4v1619556678418!5m2!1sen!2sus"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="md:hidden"
            ></iframe>
          </div>
        </div>
        {/* forms */}
        <div>
          <form
            action="https://formspree.io/f/mdopqqed"
            method="POST"
            className="mt-12 space-y-6 md:space-y-0  md:container gap-8  border-8"
          >
            <div className="md:flex ">
              <div className="md:grid grid-cols-2 border-8 border-yellow-400">
                <div className="col-span-1">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border-red-600 border-2 w-full mb-4 py-2"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="border-red-600 border-2 w-full mb-4 py-2"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <div>
                    <input
                      id="email"
                      type="email"
                      name="email address"
                      placeholder="Email Address"
                      required
                      className="border-red-600 border-2 w-full mb-4 py-2 "
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone"
                      className="border-red-600 border-2 w-full mb-4 py-2"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <textarea
                    className="border-2 border-red-600 w-full h-40"
                    name="extra"
                    id="extra"
                    placeholder="Type your message here..."
                  ></textarea>
                  {/* <input
                    type="textbox"
                    placeholder="Type your message here..."
                    className="w-full border-2 border-red-600 h-40"
                  /> */}
                </div>
              </div>
              {/* iframe */}
              <div className="w-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.6961597944105!2d-98.49907884901566!3d29.496061051134916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f50380dacfb%3A0x28ccfdad607f4ae9!2s215%20Jackson%20Keller%20Rd%2C%20San%20Antonio%2C%20TX%2078216!5e0!3m2!1sen!2sus!4v1619556678418!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  className="hidden md:block"
                ></iframe>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    allSanityHomePage {
      nodes {
        mainImage {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        _rawAboutYou
        _rawAboutMe
      }
    }
  }
`

export default IndexPage
