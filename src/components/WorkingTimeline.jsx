import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
const WorkingTimeline = () => {
  return (
   <div className="mt-8 px-4">
    <h2 className="text-3xl font-semibold">Typing Speed Test</h2>
     <Timeline className="mt-5">
    <Timeline.Item>
      <Timeline.Point />
      <Timeline.Content>
        <Timeline.Time>August 2024</Timeline.Time>
        <Timeline.Title>How to improve typing speed?</Timeline.Title>
        <Timeline.Body>
        Typing is all about muscle memory, so the only way to improve is to practice typing regularly. We created TheTypingCat to give you a tool to learn and practice touch typing in the most effective way. The process of developing proper habits requires you to train your fingers periodically and to be patient. You should first focus foremost on accuracy, ergonomics, and high typing speed will come with time. Not to overwork yourself. Remember, it is a marathon, not a sprint, it is better to take ten minutes exercises daily than a single one hour run.
        </Timeline.Body>
        <Button color="gray">
          Learn More
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Point />
      <Timeline.Content>
        <Timeline.Time>September 2024</Timeline.Time>
        <Timeline.Title>Words Per Minute (WPM)</Timeline.Title>
        <Timeline.Body>
        The WPM stands for words per minute, and it is a measure of typing speed, commonly used in the recruitment process and typing speed tests. It is standardized to five characters or keystrokes. The benefits of a standardized measurement of input speed are that it enables comparison across language. Make sure you start your touch typing with high accuracy. Your speed will grow over time.
        </Timeline.Body>
        <Button color="gray">
          Learn More
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Point />
      <Timeline.Content>
        <Timeline.Time>October 2024</Timeline.Time>
        <Timeline.Title>Why typing speed matter?</Timeline.Title>
        <Timeline.Body>
        Touch typing lets you focus on your main activity. Being less distracted by how fast you can type gives you enormous productivity boosts. It allows you to make your work done better and higher quality. You will make much fewer type errors, and your work will be much more valuable. You would be able to communicate faster and better.
        </Timeline.Body>
        <Button color="gray">
          Learn More
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button>
      </Timeline.Content>
    </Timeline.Item>
  </Timeline>
   </div>
  )
}

export default WorkingTimeline