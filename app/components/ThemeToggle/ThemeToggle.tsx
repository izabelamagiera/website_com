import { ThemeIcon, ThemeToggleWrapper, Toggle } from './ThemeToggle.styled';
import { Moon, Sun } from '@phosphor-icons/react';
import * as motion from 'motion/react-client';
import { useColorThemeContext } from '@/app/context/ColorContext/ColorThemeContext';
import { DEFAULT_THEME } from '@/app/styles/theme';

export default function ThemeToggle() {
  const { colorTheme, toggleColorTheme } = useColorThemeContext();

  return (
    <ThemeToggleWrapper onClick={toggleColorTheme}>
      <Toggle
        as={motion.div}
        layout
        style={{ left: colorTheme === DEFAULT_THEME ? 'calc(50% - 0.5rem)' : '-0.15rem' }}
      />
      <ThemeIcon>
        <Moon size={16} />
      </ThemeIcon>
      <ThemeIcon>
        <Sun size={16} />
      </ThemeIcon>
    </ThemeToggleWrapper>
  );
}
