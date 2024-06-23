export function BagIcon({ color }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
    >
      <path
        d="M6.05459 7.15156C6.5202 7.15156 6.89788 7.52802 6.89986 7.99316L6.90017 8.00618C6.90058 8.01985 6.90152 8.04345 6.90359 8.07551C6.90775 8.13991 6.91641 8.23684 6.93424 8.35509C6.97054 8.59585 7.04158 8.90263 7.17525 9.19813C7.30838 9.49241 7.49123 9.74885 7.73902 9.93143C7.97718 10.1069 8.32412 10.2509 8.85877 10.2509C9.4857 10.2509 9.8997 10.0966 10.1817 9.90862C10.469 9.71708 10.6711 9.45565 10.8147 9.16851C10.9599 8.87805 11.0367 8.57736 11.0759 8.34216C11.0952 8.22656 11.1045 8.13207 11.1089 8.0698C11.1112 8.0388 11.1121 8.01622 11.1126 8.00349L11.1129 7.99221C11.1154 7.52751 11.4928 7.15156 11.9581 7.15156C12.425 7.15156 12.8034 7.53001 12.8034 7.99685H11.9581C12.8034 7.99685 12.8034 7.99727 12.8034 7.99771L12.8034 7.99865L12.8034 8.00074L12.8034 8.0058L12.8032 8.01937C12.8031 8.02992 12.8027 8.04347 12.8022 8.05981C12.8011 8.09248 12.7991 8.13649 12.7952 8.19025C12.7876 8.29747 12.7727 8.44512 12.7435 8.62009C12.6858 8.96601 12.569 9.44017 12.3268 9.92455C12.0829 10.4123 11.7039 10.9257 11.1195 11.3153C10.5298 11.7084 9.78153 11.9415 8.85877 11.9415C7.99133 11.9415 7.2867 11.6981 6.73617 11.2924C6.19528 10.8939 5.85235 10.3755 5.63496 9.89493C5.41811 9.41558 5.31389 8.94753 5.26256 8.60716C5.23658 8.43484 5.22333 8.28963 5.21653 8.18453C5.21313 8.13185 5.21132 8.08885 5.21037 8.05713C5.20989 8.04126 5.20962 8.02817 5.20947 8.01807L5.20933 8.00516L5.20931 8.00042L5.2093 7.99848L5.2093 7.99763C5.2093 7.99723 5.2093 7.99684 6.05458 7.99685L5.2093 7.99763C5.2093 7.53079 5.58775 7.15156 6.05459 7.15156Z"
        fill={color ? color : "white"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.06195 3.56927V4.29382H3.79687C2.00637 4.29382 0.5263 5.68966 0.421516 7.47709L0.0230313 14.2745C-0.147721 17.1873 2.16833 19.6431 5.08606 19.6431H12.9268C15.8445 19.6431 18.1605 17.1873 17.9898 14.2745L17.5913 7.47709C17.4865 5.68966 16.0065 4.29382 14.216 4.29382H12.6561V3.56927C12.6561 1.55366 10.8701 0.0673828 8.85901 0.0673828C6.84793 0.0673828 5.06195 1.55366 5.06195 3.56927ZM8.85901 1.75796C7.60966 1.75796 6.75252 2.65048 6.75252 3.56927V4.29382H10.9655V3.56927C10.9655 2.65048 10.1084 1.75796 8.85901 1.75796ZM14.216 5.98439H3.79687C2.90162 5.98439 2.16158 6.68231 2.10919 7.57602L1.71071 14.3735C1.59687 16.3153 3.14091 17.9525 5.08606 17.9525H12.9268C14.8719 17.9525 16.4159 16.3153 16.3021 14.3735L15.9036 7.57603C15.8512 6.68231 15.1112 5.98439 14.216 5.98439Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
}