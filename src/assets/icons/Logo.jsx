import styled from 'styled-components';
import useScrollReveal from '../../hooks/useScrollReveal';

const StyledLogo = styled.a`
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Logo() {
  const location = window.location.origin;

  useScrollReveal(['#logo'], { distance: '0', delay: 1000 });

  return (
    <StyledLogo href={location} id='logo'>
      <svg id='demo-svg' width='100%' height='25px'>
        <path
          stroke='#64fcda'
          strokeWidth='1'
          fill='none'
          d='M10.508 22.748L8.408 18.016V24.288L3.592 24.708L0.792 23.308V2.028L5.328 1.636L8.128 3.036L10.2 7.516V1.496L15.072 1.048L17.872 2.448V23.756L13.308 24.148L10.508 22.748ZM10.48 1.748V9.588C10.48 9.79333 10.4893 10.1293 10.508 10.596C10.5267 11.044 10.5453 11.52 10.564 12.024C10.6013 12.5093 10.6293 12.9293 10.648 13.284C10.6667 13.62 10.676 13.788 10.676 13.788L10.592 13.844C10.592 13.844 10.564 13.7413 10.508 13.536C10.4707 13.3307 10.4053 13.088 10.312 12.808C10.2187 12.5093 10.116 12.2387 10.004 11.996L5.16 1.944L1.072 2.28V23L5.328 22.664V15.328C5.328 15.104 5.31867 14.7213 5.3 14.18C5.28133 13.6387 5.26267 13.0693 5.244 12.472C5.244 11.8747 5.23467 11.3707 5.216 10.96C5.19733 10.5307 5.188 10.316 5.188 10.316L5.272 10.288C5.272 10.288 5.31867 10.4747 5.412 10.848C5.524 11.2027 5.67333 11.576 5.86 11.968L10.76 22.468L14.792 22.104V1.356L10.48 1.748ZM32.1879 24.736C32.0572 24.7547 31.9172 24.764 31.7679 24.764C31.6372 24.764 31.5065 24.764 31.3759 24.764C30.4052 24.764 29.5092 24.624 28.6879 24.344C27.8852 24.0827 27.1012 23.7747 26.3359 23.42C24.3385 22.4307 22.8732 21.04 21.9399 19.248C21.0252 17.4373 20.5679 15.2907 20.5679 12.808C20.5679 11.352 20.7452 9.94267 21.0999 8.58C21.4732 7.19867 22.0239 5.95733 22.7519 4.856C23.4799 3.736 24.3852 2.82133 25.4679 2.112C26.5692 1.40267 27.8572 0.982666 29.3319 0.852C29.4812 0.833332 29.6212 0.823998 29.7519 0.823998C29.8825 0.823998 30.0132 0.823998 30.1439 0.823998C31.0772 0.823998 31.9079 0.945332 32.6359 1.188C33.3639 1.412 34.1012 1.67333 34.8479 1.972C36.1919 2.51333 37.3119 3.316 38.2079 4.38C39.1039 5.444 39.7759 6.69467 40.2239 8.132C40.6719 9.55067 40.8959 11.072 40.8959 12.696C40.8959 14.208 40.7185 15.6547 40.3639 17.036C40.0092 18.4173 39.4679 19.668 38.7399 20.788C38.0305 21.8893 37.1252 22.7853 36.0239 23.476C34.9412 24.1853 33.6625 24.6053 32.1879 24.736ZM29.3599 23.056C30.7972 22.944 32.0479 22.552 33.1119 21.88C34.1759 21.1893 35.0532 20.3027 35.7439 19.22C36.4345 18.1187 36.9479 16.896 37.2839 15.552C37.6385 14.1893 37.8159 12.7707 37.8159 11.296C37.8159 9.952 37.6572 8.67333 37.3399 7.46C37.0412 6.228 36.5745 5.136 35.9399 4.184C35.3052 3.232 34.5025 2.48533 33.5319 1.944C32.5799 1.384 31.4505 1.104 30.1439 1.104C30.0132 1.104 29.8825 1.104 29.7519 1.104C29.6399 1.104 29.5092 1.11333 29.3599 1.132C27.9225 1.26267 26.6719 1.67333 25.6079 2.364C24.5439 3.036 23.6572 3.92267 22.9479 5.024C22.2385 6.10667 21.7065 7.32 21.3519 8.664C21.0159 9.98933 20.8479 11.3707 20.8479 12.808C20.8479 14.208 21.0065 15.5333 21.3239 16.784C21.6412 18.016 22.1172 19.108 22.7519 20.06C23.3865 20.9933 24.1892 21.7307 25.1599 22.272C26.1305 22.8133 27.2599 23.084 28.5479 23.084C28.6972 23.084 28.8372 23.084 28.9679 23.084C29.0985 23.084 29.2292 23.0747 29.3599 23.056ZM29.3599 18.716C29.2852 18.716 29.2105 18.7253 29.1359 18.744C29.0799 18.744 29.0145 18.744 28.9399 18.744C27.8199 18.744 26.9332 18.2587 26.2799 17.288C25.6452 16.3173 25.3279 14.6933 25.3279 12.416C25.3279 10.792 25.5052 9.48533 25.8599 8.496C26.2145 7.50667 26.6999 6.77867 27.3159 6.312C27.9319 5.82667 28.6132 5.556 29.3599 5.5C29.4345 5.5 29.5092 5.5 29.5839 5.5C29.6585 5.48133 29.7332 5.472 29.8079 5.472C30.9092 5.472 31.7679 5.948 32.3839 6.9C32.9999 7.83333 33.3079 9.43867 33.3079 11.716C33.3079 14.1427 32.9345 15.8973 32.1879 16.98C31.4599 18.044 30.5172 18.6227 29.3599 18.716ZM29.2759 18.436C30.3772 18.3427 31.2732 17.7827 31.9639 16.756C32.6732 15.7293 33.0279 14.0493 33.0279 11.716C33.0279 10.652 32.9625 9.74667 32.8319 9C32.7012 8.25333 32.5052 7.64667 32.2439 7.18C32.1505 7.16133 32.0572 7.152 31.9639 7.152C31.8705 7.13333 31.7772 7.124 31.6839 7.124C30.5825 7.124 29.7612 7.70267 29.2199 8.86C28.6785 9.99867 28.4079 11.6507 28.4079 13.816C28.4079 14.8987 28.4825 15.8227 28.6319 16.588C28.7812 17.3347 28.9959 17.9507 29.2759 18.436ZM53.189 22.72L51.201 19.136V24.232L46.385 24.652L43.585 23.252V1.972L50.613 1.356C50.7623 1.33733 50.9023 1.328 51.033 1.328C51.1823 1.328 51.3223 1.328 51.453 1.328C52.5356 1.328 53.581 1.496 54.589 1.832C55.597 2.168 56.5023 2.66267 57.305 3.316C58.1076 3.96933 58.7423 4.76267 59.209 5.696C59.6756 6.61067 59.909 7.656 59.909 8.832C59.909 11.8 58.8263 13.9373 56.661 15.244L61.393 23.672L55.989 24.12L53.189 22.72ZM53.469 13.732C54.6263 13.0973 55.4756 12.2573 56.017 11.212C56.5583 10.1667 56.829 8.90667 56.829 7.432C56.829 5.696 56.3436 4.296 55.373 3.232C54.421 2.14933 53.077 1.608 51.341 1.608C51.229 1.608 51.117 1.608 51.005 1.608C50.893 1.608 50.7716 1.61733 50.641 1.636L43.865 2.224V22.972L48.121 22.608V15.216L49.325 15.104L53.329 22.44L58.117 22.02L53.469 13.732ZM48.121 5.892L49.969 5.724H50.277C50.893 5.724 51.4063 5.91067 51.817 6.284C52.2463 6.63867 52.461 7.264 52.461 8.16C52.461 9.09333 52.237 9.82133 51.789 10.344C51.341 10.848 50.7343 11.1373 49.969 11.212L48.121 11.38V5.892ZM51.201 10.512C51.8543 10.0453 52.181 9.26133 52.181 8.16C52.181 8.02933 52.1716 7.908 52.153 7.796C52.153 7.684 52.1436 7.572 52.125 7.46L51.201 7.544V10.512ZM63.0264 23.196V1.916L67.8144 1.496L70.6144 2.896V17.82L74.5344 17.484L77.3344 18.884V23.616L65.8264 24.596L63.0264 23.196ZM67.5344 18.38V1.804L63.3064 2.168V22.916L74.2544 21.964V17.792L67.5344 18.38ZM82.2711 22.944V15.468L76.6151 2.112L81.9351 1.636L84.7351 3.036L85.9111 6.116L87.4791 1.412L92.5471 0.963998L95.3471 2.364L89.8871 16.476V23.868L85.0711 24.316L82.2711 22.944ZM92.1271 1.3L87.6471 1.692L84.8471 10.036L81.7391 1.944L77.0351 2.364L82.5511 15.412V22.636L86.8071 22.244V15.048L92.1271 1.3ZM105.967 8.216C105.911 7.992 105.855 7.78667 105.799 7.6C105.743 7.41333 105.687 7.236 105.631 7.068C105.221 7.18 104.885 7.376 104.623 7.656C104.362 7.936 104.231 8.25333 104.231 8.608C104.231 8.92533 104.269 9.18667 104.343 9.392L105.127 9.616C106.079 9.896 107.041 10.2507 108.011 10.68C108.982 11.0907 109.869 11.5947 110.671 12.192C111.493 12.7707 112.155 13.4613 112.659 14.264C113.163 15.048 113.415 15.944 113.415 16.952C113.415 19.248 112.771 21.068 111.483 22.412C110.214 23.756 108.413 24.5307 106.079 24.736C105.93 24.7547 105.771 24.764 105.603 24.764C105.454 24.7827 105.305 24.792 105.155 24.792C104.446 24.792 103.718 24.6893 102.971 24.484C102.225 24.2973 101.459 23.9987 100.675 23.588C99.7608 23.084 98.9954 22.5893 98.3794 22.104C97.7634 21.6 97.2594 20.984 96.8674 20.256C96.4941 19.528 96.1768 18.5853 95.9154 17.428L100.591 15.636L103.391 17.036C103.503 17.5213 103.634 17.9413 103.783 18.296C104.922 18.128 105.491 17.5587 105.491 16.588C105.491 16.4387 105.473 16.308 105.435 16.196C105.417 16.0653 105.389 15.944 105.351 15.832C105.351 15.832 105.239 15.7667 105.015 15.636C104.791 15.5053 104.586 15.4213 104.399 15.384C102.589 14.936 101.086 14.404 99.8914 13.788C98.7154 13.172 97.8381 12.388 97.2594 11.436C96.6994 10.484 96.4194 9.28 96.4194 7.824C96.4194 6.592 96.7088 5.472 97.2874 4.464C97.8661 3.43733 98.6688 2.60667 99.6954 1.972C100.741 1.31867 101.935 0.935999 103.279 0.823998C103.447 0.805332 103.606 0.795999 103.755 0.795999C103.923 0.777332 104.082 0.767999 104.231 0.767999C105.071 0.767999 105.809 0.879999 106.443 1.104C107.097 1.328 107.843 1.636 108.683 2.028C109.542 2.42 110.261 2.85867 110.839 3.344C111.418 3.82933 111.894 4.436 112.267 5.164C112.659 5.87333 112.986 6.788 113.247 7.908L108.767 9.616L105.967 8.216ZM103.139 18.632C102.393 18.632 101.795 18.408 101.347 17.96C100.899 17.512 100.573 16.868 100.367 16.028L96.2234 17.596C96.6528 19.444 97.3621 20.8253 98.3514 21.74C99.3408 22.636 100.675 23.084 102.355 23.084C102.505 23.084 102.654 23.084 102.803 23.084C102.953 23.084 103.102 23.0747 103.251 23.056C105.491 22.8693 107.227 22.1227 108.459 20.816C109.71 19.5093 110.335 17.7547 110.335 15.552C110.335 13.984 109.897 12.7707 109.019 11.912C108.142 11.0533 106.817 10.3813 105.043 9.896L102.803 9.28C102.131 9.09333 101.683 8.82267 101.459 8.468C101.254 8.11333 101.151 7.69333 101.151 7.208C101.151 6.72267 101.338 6.30267 101.711 5.948C102.085 5.59333 102.579 5.388 103.195 5.332C103.27 5.332 103.335 5.332 103.391 5.332C103.466 5.31333 103.541 5.304 103.615 5.304C104.306 5.304 104.847 5.5 105.239 5.892C105.65 6.26533 105.958 6.91867 106.163 7.852L110.111 6.34C109.719 4.56667 109.047 3.25067 108.095 2.392C107.162 1.51467 105.874 1.076 104.231 1.076C104.082 1.076 103.923 1.076 103.755 1.076C103.606 1.076 103.457 1.08533 103.307 1.104C102.001 1.216 100.853 1.58 99.8634 2.196C98.8741 2.812 98.0994 3.60533 97.5394 4.576C96.9794 5.54667 96.6994 6.62933 96.6994 7.824C96.6994 9.46667 97.0634 10.7733 97.7914 11.744C98.5381 12.7147 99.8541 13.4427 101.739 13.928L103.475 14.376C104.185 14.5627 104.745 14.8053 105.155 15.104C105.566 15.4027 105.771 15.8973 105.771 16.588C105.771 17.8013 104.997 18.4827 103.447 18.632H103.139Z'></path>
      </svg>
    </StyledLogo>
  );
}
