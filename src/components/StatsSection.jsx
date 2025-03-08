import React from 'react';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

const StatsSection = () => {
  return (
    <section className="py-16 bg-[#1a1f26] text-white text-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {[
          { stat: 150, title: "Projects Completed" },
          { stat: 25, title: "Open Projects" },
          { stat: 300, title: "Happy Customers" },
          { stat: 10, title: "Years of Experience" }
        ].map((item, idx) => (
          <div key={idx} className="p-8 border-b-2 border-r-2 border-sky-500/20">
            <InView triggerOnce>
              {({ inView, ref }) => (
                <div ref={ref}>
                  {/* Stat Number */}
                  <h3 className="text-4xl font-semibold mb-4">
                    <CountUp
                      start={0}
                      end={inView ? item.stat : 0}
                      duration={2.5}
                      separator=","
                    />
                  </h3>
                  {/* Stat Title */}
                  <p className="text-lg text-[#E7EBEE]">{item.title}</p>
                </div>
              )}
            </InView>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;