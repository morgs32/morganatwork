import { IconLink } from '@/app/components/IconLink';
import { TwitterIcon } from './Intro';


export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Brought to you by{' '}
      <IconLink href="#" icon={TwitterIcon} compact large>
        Joe Davola
      </IconLink>
    </p>
  );
}
