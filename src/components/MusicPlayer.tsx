import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay, FaVolumeUp } from 'react-icons/fa';

const songUrl = new URL('../Music/Silent Sanctuary - Ikaw Lamang (Lyrics).mp3', import.meta.url).href;

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const updateProgress = () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        setProgress(audio.currentTime / audio.duration);
      } else {
        setProgress(0);
      }
    };

    const handleLoadedMetadata = () => {
      setIsReady(true);
      updateProgress();
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-[2rem] border border-pink-100 bg-white/80 p-8 shadow-soft backdrop-blur sm:flex-row sm:justify-between"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-pink-500">A soft soundtrack</p>
          <h2 className="mt-2 text-2xl font-semibold text-fuchsia-700">Love Song</h2>
          <p className="text-slate-600">I'm sorry.</p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[260px]">
          <audio ref={audioRef} preload="metadata" playsInline>
            <source src={songUrl} type="audio/mpeg" />
            <source src={songUrl} type="audio/mp3" />
          </audio>

          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              disabled={!isReady}
              className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 p-3 text-white shadow-soft disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <div className="flex flex-1 items-center gap-2">
              <FaVolumeUp className="text-pink-500" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(event) => setVolume(Number(event.target.value))}
                className="w-full accent-pink-500"
              />
            </div>
          </div>

          <div className="h-2 rounded-full bg-pink-100">
            <div className="h-2 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MusicPlayer;
