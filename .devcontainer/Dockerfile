FROM debian:13-slim

ARG DEBIAN_FRONTEND=noninteractive

# Instalamos dependencias básicas
USER root
RUN \
  apt-get -y update && \
  apt-get -y install wget curl openssl apt-transport-https ca-certificates gpg zip unzip nano htop sudo zsh make git git-flow && \
  # NodeJS (22.x)
  curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /usr/share/keyrings/nodesource.gpg && \
  sh -c 'echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_22.x nodistro main" > /etc/apt/sources.list.d/nodesource.list' && \
  apt-get -y update && apt-get -y install nodejs && \
  # Crear usuario "web"
  useradd -s /bin/zsh -m -d /home/web -U -u 2000 web && \
  usermod --password $(echo web | openssl passwd -1 -stdin) web && \
  usermod -aG sudo web && \
  mkdir -p /etc/sudoers.d && \
  echo 'web ALL=(ALL) NOPASSWD:ALL' > /etc/sudoers.d/web && \
  mkdir -p /home/web/sites && \
  # Instalar D2 (diagramas, útil para documentar el curso)
  curl -fsSL https://d2lang.com/install.sh | sh -s -- && \
  # Instalar Starship prompt
  curl -sS https://starship.rs/install.sh | sh -s -- --yes && \
  # Limpieza
  apt-get -y clean && apt-get -y autoremove

USER web
RUN \
  # Setup de zsh
  mkdir -p /home/web/.config && mkdir -p /home/web/.zsh && \
  git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions && \
  wget -O /home/web/.config/starship.toml https://starship.rs/presets/toml/gruvbox-rainbow.toml && \
  printf 'HISTFILE="$HOME/.zsh_history"\nHISTSIZE=500000\nSAVEHIST=500000\n' >> /home/web/.zshrc && \
  printf 'setopt EXTENDED_HISTORY INC_APPEND_HISTORY SHARE_HISTORY\n' >> /home/web/.zshrc && \
  printf 'setopt HIST_EXPIRE_DUPS_FIRST HIST_IGNORE_DUPS HIST_IGNORE_ALL_DUPS\n' >> /home/web/.zshrc && \
  printf 'setopt HIST_FIND_NO_DUPS HIST_IGNORE_SPACE HIST_SAVE_NO_DUPS HIST_REDUCE_BLANKS\n' >> /home/web/.zshrc && \
  printf 'source $HOME/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh\n' >> /home/web/.zshrc && \
  printf 'eval "$(starship init zsh)"\n' >> /home/web/.zshrc && \
  # Instalar PNPM (recomendado para Astro)
  wget -qO- https://get.pnpm.io/install.sh | ENV="/home/web/.bashrc" SHELL="$(which bash)" bash - && \
  printf 'export PNPM_HOME="$HOME/.local/share/pnpm"\n' >> /home/web/.zshrc && \
  printf 'export PATH="$PNPM_HOME:$PATH"\n' >> /home/web/.zshrc && \
  # Configurar GPG_TTY
  echo '\nexport GPG_TTY=$(tty)' >> /home/web/.bashrc && \
  echo '\nexport GPG_TTY=$(tty)' >> /home/web/.zshrc

EXPOSE 4321
