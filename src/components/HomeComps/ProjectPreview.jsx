import project1 from '../../assets/Pics/project1.png';
import project2 from '../../assets/Pics/project2.png';
import project3 from '../../assets/Pics/project3.png';
import project4 from '../../assets/Pics/project4.png';
import project5 from '../../assets/Pics/project5.png';
import { TerminalControlSvg } from '../../assets/TerminalSvgs/TerminalSvgs';

export function ProjectPreview() {
  return (
    <>
      <div className="block font-proximaBold text-6xl text-center p-10">Project Preview</div>

      <div className="flex flex-col gap-64 p-10 mb-48">
        {/* Face Mask Detection Project */}
        <div className="flex sm:flex-col md:flex-row gap-5">
          <div className="flex flex-col justify-center gap-2 sm:w-full md:w-1/2">
            <div className="sm:text-center md:text-left font-proximaBold text-5xl">Face Mask Detection 😷</div>
            <div className="flex flex-col">
              <div className="flex flex-row w-full border border-black p-1 rounded-tl-lg rounded-tr-lg ">
                <TerminalControlSvg />
              </div>
              <div className="w-full bg-black rounded-bl-lg rounded-br-lg p-5">
                <div className="text-white">
                  Was my first project in artificial intelligence. Trained a model under three classes, whether or not a person was wearing
                  a mask, not wearing a mask, or wearing a mask incorrectly. Although it wasn't as accurate as I wanted it to be, it gave me a great
                  foundation for future projects.
                </div>
                <div className="text-green-500 text-right">
                  <span >See more &gt;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-1/2">
            <img className="rounded-lg border-2 border-black" src={project1} />
          </div>
        </div>

        {/* Database Shopping Website */}
        <div>
          <div className="sm:block md:hidden">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col justify-center gap-2">
                <div className="md:text-right font-proximaBold text-5xl">Database Shopping Site 🛒</div>
                <div className="flex flex-col">
                  <div className="flex flex-row w-full border border-black p-1 rounded-tl-lg rounded-tr-lg">
                    <TerminalControlSvg />
                  </div>
                  <div className="w-full bg-black rounded-bl-lg rounded-br-lg p-5">
                    <div className="text-white">
                      This is a project where I designed and implemented a shopping website with account management, item browsing, and payment processing.
                      This involved integrating databases to store data, such as items, accounts, transactions, etc. Learned MySql from my classes, and decided to apply it to making this website.
                    </div>
                    <div className="text-green-500 text-right">
                      <span >See more &gt;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img className="rounded-lg  border-2 border-black" src={project2} />
              </div>
            </div>
          </div>

          <div className="sm:hidden md:block">
            <div className="flex flex-row gap-5">
              <div className="w-1/2">
                <img className="rounded-lg  border-2 border-black" src={project2} />
              </div>
              <div className="flex flex-col justify-center gap-2 w-1/2">
                <div className="md:text-right font-proximaBold text-5xl">Database Shopping Site 🛒</div>
                <div className="flex flex-col">
                  <div className="flex flex-row w-full border border-black p-1 rounded-tl-lg rounded-tr-lg">
                    <TerminalControlSvg />
                  </div>
                  <div className="w-full bg-black rounded-bl-lg rounded-br-lg p-5">
                    <div className="text-white">
                      This is a project where I designed and implemented a shopping website with account management, item browsing, and payment processing.
                      This involved integrating databases to store data, such as items, accounts, transactions, etc. Learned MySql from my classes, and decided to apply it to making this website.
                    </div>
                    <div className="text-green-500 text-right">
                      <span >See more &gt;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multiple PDF Chatbot*/}
        <div className="flex sm:flex-col md:flex-row gap-5">
          <div className="flex flex-col justify-center gap-2 sm:w-full md:w-1/2">
            <div className="sm:text-center md:text-left font-proximaBold text-5xl">Multiple PDF Chatbot 📄</div>
            <div className="flex flex-col">
              <div className="flex flex-row w-full border border-black p-1 rounded-tl-lg rounded-tr-lg">
                <TerminalControlSvg />
              </div>
              <div className="w-full bg-black rounded-bl-lg rounded-br-lg p-5">
                <div className="text-white">
                  Was my second project dealing with artificial intelligence, specifically Large Language Models. I didn't specifically train a model, but used the model that Google had at the time, which was their Palm model.
                  Despite that, this helped me gain an understanding on how to use API's, vector storage for word embeddings, and information retrieval.
                </div>
                <div className="text-green-500 text-right">
                  <span >See more &gt;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-1/2">
            <img className="rounded-lg border-2 border-black" src={project3} />
          </div>
        </div>

        {/* Restaurant Website */}
        <div>
          <div className="sm:block md:hidden">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col justify-center gap-2">
                <div className="md:text-right font-proximaBold text-5xl">Restaurant Website 🥗</div>
                <div className="flex flex-col">
                  <div className="flex flex-row w-full border border-black p-1 rounded-tl-lg rounded-tr-lg">
                    <TerminalControlSvg />
                  </div>
                  <div className="w-full bg-black rounded-bl-lg rounded-br-lg p-5">
                    <div className="text-white">
                      Just another website I made for a Coursera Project with React. I actually used an open source library of React components, Chakra UI,
                      which helped me to create the UI interface. Another tool I used in conjunction with that was Figma, which allowed me to plan out the website layout.
                    </div>
                    <div className="text-green-500 text-right">
                      <span >See more &gt;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img className="rounded-lg border-2 border-black" src={project4} />
              </div>
            </div>
          </div>

          <div className="sm:hidden md:block">
            <div className="flex flex-row gap-5">
              <div className="w-1/2">
                <img className="rounded-lg border-2 border-black" src={project4} />
              </div>
              <div className="flex flex-col justify-center gap-2 w-1/2">
                <div className="md:text-right font-proximaBold text-5xl">Restaurant Website 🥗</div>
                <div className="flex flex-col">
                  <div className="flex flex-row w-full border border-black p-1 rounded-tl-lg rounded-tr-lg">
                    <TerminalControlSvg />
                  </div>
                  <div className="w-full bg-black rounded-bl-lg rounded-br-lg p-5">
                    <div className="text-white">
                      Just another website I made for a Coursera Project with React. I actually used an open source library of React components, Chakra UI,
                      which helped me to create the UI interface. Another tool I used in conjunction with that was Figma, which allowed me to plan out the website layout.
                    </div>
                    <div className="text-green-500 text-right">
                      <span >See more &gt;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WikiCrashia */}
        <div className="flex sm:flex-col md:flex-row gap-5">
          <div className="flex flex-col justify-center gap-2 sm:w-full md:w-1/2">
            <div className="sm:text-center md:text-left font-proximaBold text-5xl">WikiCrashia Crash Report 🗺️</div>
            <div className="flex flex-col">
              <div className="flex flex-row w-full border border-black p-1 rounded-tl-lg rounded-tr-lg">
                <TerminalControlSvg />
              </div>
              <div className="w-full bg-black rounded-bl-lg rounded-br-lg p-5">
                <div className="text-white">
                  Latest project where me and my two other teammates made a website called WikiCrashia. The premise of the website was to get X (Twitter) posts regarding
                  incidents on the road, whether it be car crashes, collisions, or any road incident for that matter. We extracted the addresses from the posts to plot heatmaps.
                  For this project, I trained a model that predicts the severity of a given accident from the post. This involved many factors which included the type of road, if it was major or not, emergency services on scene, if it was a multi-vehicle collision, etc.
                </div>
                <div className="text-green-500 text-right">
                  <span >See more &gt;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-1/2">
            <img className="rounded-lg border-2 border-black" src={project5} />
          </div>
        </div>
      </div>

    </>
  )
}