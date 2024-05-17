import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import Component1 from '../components/component1'
import FeatureCard from '../components/feature-card'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Secure your Auth</title>
        <meta property="og:title" content="Secure your Auth" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text">Stop fake accounts.</h1>
            <h1 className="home-text01"> Protect real ones.</h1>
            <span className="home-text02">
              This lightweight API lets you block large-scale bot attacks, fake
              signups, and account takeovers
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <PrimaryPinkButton button="Get Started"></PrimaryPinkButton>
              </div>
              <OutlineGrayButton button="Learn More"></OutlineGrayButton>
            </div>
            <img
              alt="pastedImage"
              src="/pastedimage-bcd-400h.png"
              className="home-pasted-image"
            />
          </div>
          <section className="home-contaier">
            <div className="home-container04">
              <div className="home-container05">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
                </svg>
              </div>
              <h2 className="home-text03">
                Invisibly shield your
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <h3 className="home-text04 HeadingTwo">
                <span className="home-text05">Accounts from threats</span>
                <br></br>
              </h3>
              <span className="home-text07">
                <span>
                  Go beyond CAPTCHAs , human and bot-driven attacks using user
                  identity, reputation, and behavior analysis.
                </span>
                <span></span>
              </span>
            </div>
            <div className="home-container06">
              <div className="home-container07">
                <Component1></Component1>
                <Component1></Component1>
                <Component1></Component1>
                <Component1></Component1>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-lfq-600h.png"
                className="home-pasted-image1"
              />
            </div>
          </section>
        </div>
      </div>
      <img alt="image" src="/curved6-1200w.jpg" className="home-image" />
      <section className="home-features">
        <FeatureCard
          text="Choose the best design system for your next product."
          title="Components"
          imageSrc="/cube1.svg"
        ></FeatureCard>
        <FeatureCard imageSrc="/person1.svg"></FeatureCard>
        <FeatureCard
          text="Make your code easier to maintain using variables."
          title="Less Code"
          imageSrc="/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="This design system is fully supported on any device."
          title="Fully Responsive"
          imageSrc="/credit%20card1.svg"
        ></FeatureCard>
      </section>
      <section className="home-features1"></section>
      <section className="home-contaier1">
        <div className="home-container08">
          <div className="home-container09">
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text10">
            Block Fake
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h2>
          <h3 className="home-text11 HeadingTwo">
            <span className="home-text12">
              Accounts
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text13">in minutes</span>
            <br className="home-text14"></br>
          </h3>
          <span className="home-text15">
            <span>
              Go beyond CAPTCHAs , human and bot-driven attacks using user
              identity, reputation, and behavior analysis.
            </span>
            <span></span>
          </span>
        </div>
        <div className="home-container10">
          <div className="home-container11">
            <div className="home-container12">
              <img alt="image" src="/rocket1.svg" className="home-image1" />
              <h5 className="home-text18">Network analysis</h5>
              <span className="home-text19">
                Spot network of bad user activity
              </span>
            </div>
            <div className="home-container13">
              <img alt="image" src="/rocket1.svg" className="home-image2" />
              <h5 className="home-text20">Network analysis</h5>
              <span className="home-text21">
                Spot network of bad user activity
              </span>
            </div>
          </div>
          <div className="home-container14">
            <img
              alt="pastedImage"
              src="/pastedimage-zc3-200w.png"
              className="home-pasted-image2"
            />
          </div>
          <div className="home-container15">
            <div className="home-container16">
              <img alt="image" src="/rocket1.svg" className="home-image3" />
              <h5 className="home-text22">Network analysis</h5>
              <span className="home-text23">
                Spot network of bad user activity
              </span>
            </div>
            <div className="home-container17">
              <img alt="image" src="/rocket1.svg" className="home-image4" />
              <h5 className="home-text24">Network analysis</h5>
              <span className="home-text25">
                Spot network of bad user activity
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-contaier2">
        <div className="home-container18">
          <div className="home-container19">
            <div className="home-container20">
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
              </svg>
            </div>
            <h2 className="home-text26">
              <span>
                Invisibly
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                shield your
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
            <h3 className="home-text30 HeadingTwo">
              <span className="home-text31">Accounts from threats</span>
              <br></br>
            </h3>
            <span className="home-text33">
              <span>
                Go beyond CAPTCHAs , human and bot-driven attacks using user
                identity, reputation, and behavior analysis.
              </span>
              <span></span>
            </span>
          </div>
          <img
            alt="pastedImage"
            src="/pastedimage-00we-600h.png"
            className="home-pasted-image3"
          />
        </div>
      </section>
      <section className="home-contaier3">
        <h1 className="home-text36 HeadingOne">Pricing</h1>
        <div className="home-container21">
          <span className="home-text37">
            Get started with options that fit your needs. Fully transparent
            pricing with linear cost scalability.
          </span>
        </div>
        <div className="home-container22">
          <div className="home-container23">
            <strong className="home-text38">PAY-AS-YOU-GO</strong>
            <h3 className="home-text39">
              <span>$0 / month</span>
              <br></br>
            </h3>
            <span className="home-text42">
              <span>
                Go beyond CAPTCHAs , human and bot-driven attacks using user
                identity, reputation, and behavior analysis.
              </span>
              <span></span>
            </span>
          </div>
          <div className="home-container24">
            <div className="home-container25">
              <div className="home-container26">
                <div className="home-container27">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                  </svg>
                  <h4 className="home-text45">Free for 1 user</h4>
                </div>
                <div className="home-container28">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                  </svg>
                  <h4 className="home-text46">Free for 1 user</h4>
                </div>
                <div className="home-container29">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                  </svg>
                  <h4 className="home-text47">Free for 1 user</h4>
                </div>
                <button type="reset" className="home-button button">
                  <span>Let&apos;s Started </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
