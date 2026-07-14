import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

interface LoveCounterProps {
  startDate?: string;
}

const LoveCounter = ({
  startDate = '2023-11-04T00:00:00',
}: LoveCounterProps) => {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const start = useMemo(() => new Date(startDate), [startDate]);

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();

      // Calculate Years, Months, Days accurately
      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();

      if (days < 0) {
        months--;

        const previousMonth = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        );

        days += previousMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      // Calculate time since the last completed day
      const anniversaryThisMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        start.getDate()
      );

      if (now.getDate() < start.getDate()) {
        anniversaryThisMonth.setMonth(anniversaryThisMonth.getMonth() - 1);
      }

      const timeDiff = now.getTime() - anniversaryThisMonth.getTime();

      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
      );

      const seconds = Math.floor(
        (timeDiff % (1000 * 60)) / 1000
      );

      setTimeLeft({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCounter();

    const interval = window.setInterval(updateCounter, 1000);

    return () => window.clearInterval(interval);
  }, [start]);

  const values = [
    { label: 'Years', value: timeLeft.years },
    { label: 'Months', value: timeLeft.months },
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl rounded-[2rem] border border-pink-100 bg-white/80 p-8 text-center shadow-soft sm:p-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-pink-500">
          Counting every heartbeat
        </p>

        <h2 className="mt-2 text-3xl font-semibold text-fuchsia-700 sm:text-4xl">
          I've Loved You For
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.25rem] bg-gradient-to-br from-pink-50 to-purple-50 p-5"
            >
              <p className="text-4xl font-semibold text-fuchsia-700">
                {item.value}
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LoveCounter;