import Image from 'next/image';

export default function certificate() {
  return (
    <div>
      <h1 className="text-blue-500 text-center text-xl mt-3">⭐Certificates</h1>
      <div className="relative h-55">
        {/* Skewed Projects box on the side */}
        <div className="absolute left-4 top-30 w-55 h-15 bg-white transform -skew-x-30 flex items-center justify-center shadow">
          <div className="transform skew-x-30 text-black text-center">College's Annual Student Research Conference</div>
        </div>
      </div>
      <iframe className="mx-auto" src="/research.pdf" width="80%" height="600px" title="Certificate"></iframe>
      <div className="mt-7 text-center w-xl mx-auto">
        <p>
          Participated in our college's Annual Student Research Conference and presented my paper on "The Impact of
          Artificial Intelligence on Employment Dynamics: Myth vs Reality".
        </p>
      </div>
      <div className="relative h-55">
        {/* Skewed Projects box on the side */}
        <div className="absolute right-3 top-30 w-55 h-11 bg-white transform -skew-x-30 flex items-center justify-center shadow">
          <div className="transform skew-x-30 text-black">AWS Cloud Practitioner</div>
        </div>
      </div>
      <Image className="mx-auto" src="/aws.png" width="300" height="300" alt="aws certificate" />
      <p className="text-center mt-2">Valid till March 11, 2027</p>
      <div className="relative h-55">
        {/* Skewed Projects box on the side */}
        <div className="absolute left-3 top-30 w-60 h-11 bg-white transform -skew-x-30 flex items-center justify-center shadow">
          <div className="transform skew-x-30 text-black">CodeSignal Interview Practice</div>
        </div>
      </div>
      <Image className="mx-auto" src="/code.png" width="600" height="600" alt="CodeSignal certificate" />
      <p className="text-center mt-2">Completed 4-week interview coding practice in python at CodeSignal</p>
      <div className="relative h-55">
        {/* Skewed Projects box on the side */}
        <div className="absolute right-3 top-30 w-59 h-11 bg-white transform -skew-x-30 flex items-center justify-center shadow">
          <div className="transform skew-x-30 text-black">Chartwells Dining Association</div>
        </div>
      </div>
      <Image className="mx-auto" src="/chartwells.jpg" width="600" height="600" alt="chartwells certificate" />
      <p className="text-center mt-3">3 years work anniversary at Chartwells Dining Association in College </p>
    </div>
  );
}
