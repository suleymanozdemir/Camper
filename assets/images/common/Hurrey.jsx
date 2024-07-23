import * as React from "react";
import Svg, {
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath,
} from "react-native-svg";
const Hurrey = ({ width, height }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={width}
        height={height}
        viewBox="0 0 236 180"
    >
        <G clipPath="url(#a)">
            <Path
                fill="#84CC16"
                d="M55.933 150.217c-1.985-.199-4.059-.412-5.939.108-1.88.521-3.437 2.04-2.88 3.492 1.248 3.238 8.567.983 11.941 3.197 1.205.79 1.675 2.035 2.616 3.006 1.522 1.577 4.14 2.313 6.667 2.717 15.179 2.431 32.483-3.825 45.787 2.199 4.309 1.952 7.706 5.058 12.431 6.36 6.258 1.725 13.112-.118 19.588-1.3a96.754 96.754 0 0 1 24.494-1.271c6.055.462 14.11.617 16.048-3.738 1.247-2.8-1.392-5.918-4.895-7.243-3.503-1.325-7.603-1.283-11.515-1.156-7.55.268-15.102.809-22.652.546-14.6-.514-28.392-6.244-42.609-6.434-16.557-.199-32.448 1.177-49.082-.483ZM40.353 76.404C38.135 78.613 38 82 38 82s3.435-.192 5.645-2.404C45.854 77.385 46 74 46 74s-3.438.199-5.647 2.404ZM49.267 18.623C50.224 21.94 53.734 24 53.734 24s1.96-3.31 1.003-6.626C53.78 14.06 50.27 12 50.27 12s-1.97 3.31-1.003 6.623ZM186.355 26.405C184.138 28.614 184 32 184 32s3.438-.192 5.647-2.403C191.856 27.387 192 24 192 24s-3.436.207-5.645 2.405ZM116.024 59.798c-.277 3.314 1.973 6.202 1.973 6.202s2.703-2.487 2.979-5.803c.277-3.317-1.973-6.197-1.973-6.197s-2.703 2.482-2.979 5.798ZM192.024 106.8c-.277 3.313 1.973 6.2 1.973 6.2s2.703-2.486 2.979-5.8c.277-3.313-1.973-6.2-1.973-6.2s-2.703 2.486-2.979 5.8Z"
                opacity={0.1}
            />
            <Path
                fill="#84CC16"
                d="M137.118 22.587c-15.129-.457-29.539-4.687-43.298-9.327C80.06 8.62 66.43 3.49 51.664 1.034 42.166-.546 31.303-.768 23.65 3.65c-7.366 4.248-9.745 11.585-11.024 18.393-.963 5.12-1.529 10.51 1.108 15.305 1.833 3.33 5.082 6.128 7.33 9.315 7.825 11.096 2.294 24.777-6.182 35.62-3.974 5.083-8.591 9.93-11.66 15.34-3.07 5.412-4.49 11.608-1.803 17.124 2.66 5.47 9.002 9.578 15.873 12.467 13.954 5.859 30.39 7.548 46.429 8.5 35.493 2.109 71.173 1.195 106.76.281 13.17-.337 26.397-.68 39.352-2.447 7.196-.979 14.623-2.535 19.847-6.294 6.63-4.771 8.273-12.849 3.829-18.832-7.452-10.032-28.052-12.526-33.267-23.294-2.866-5.926.077-12.528 4.245-18.025 8.939-11.792 23.922-22.139 24.709-35.62.543-9.257-6.66-18.528-17.796-22.908-11.672-4.593-27.861-4.014-36.468 3.586-8.872 7.815-24.455 10.827-37.815 10.426Z"
                opacity={0.1}
            />
            <Path
                fill="url(#b)"
                d="M188.158 67.125a2.114 2.114 0 0 0-1.445 1.28l-.235-.038-.877-.142s-4.65-.385-5.518-.326c-.868.059-1.412-.802-1.412-.802l-3.456-2.94-.269-.236c.375-.142.608-.215.608-.215s-9.276-11.586-11.276-11.81c-2-.226-5.306-2.93-5.339-2.957l-.035-.184c-.073-.39-.127-.785-.167-1.182l.492.302c0-.137 0-.274.014-.411a7.501 7.501 0 0 1 1.384-3.973c.967-1.347 2.397-2.407 2.969-3.96a5.732 5.732 0 0 0 .303-2.079 6.955 6.955 0 0 0-.964-3.615 4.48 4.48 0 0 0-3.036-2.104c-.329-.053-.665-.06-.99-.136-1.932-.456-2.642-3.06-4.52-3.698-.875-.298-1.849-.101-2.694.267-.845.37-1.61.899-2.435 1.308-.826.41-1.763.71-2.513 1.289-.078.059-.16.13-.236.203l-.148.144a5.34 5.34 0 0 0-.802 1.053l-.036.059a2.31 2.31 0 0 0-.065.125c-.022.043-.036.066-.05.1-.014.032-.038.075-.054.113l-.049.113-.043.11c-.014.04-.03.08-.042.122-.012.043-.024.069-.033.104l-.035.126-.021.101c0 .043-.017.088-.024.13-.007.043 0 .064 0 .095v.437c.009.07.023.138.042.206.127.435.565.88.899 1.267-.038.036-.075.069-.113.107a8.272 8.272 0 0 0-2.376 7.406 7.854 7.854 0 0 0-1.372-.835 11.925 11.925 0 0 0-5.104-1.182c-2.882-.033-6.931-1.121-6.931-1.121.103.198.182.409.235.627a16.856 16.856 0 0 0-5.988-2.145s-1.2.168-1.36-2.365a10.758 10.758 0 0 0-.424-2.334 40.04 40.04 0 0 1-1.426-7.093l-.402-3.718s1.812-9.694.722-13.828c.351-1.295.153-2.482-1.002-3.336-4.558-3.372-9.155 9.752-9.155 9.752l-1.708 1.667a3.663 3.663 0 0 0-1.45-.556s-.92.946-1.56 3.528c-.339 1.369-2.654 3.655-4.748 5.497-1.487 1.308-2.922 2.668-4.355 4.032-1.06 1.012-3.42 2.46-8.567 3.277-.807.128-1.541.249-2.212.36a6.97 6.97 0 0 0 .259-1.878 7.064 7.064 0 0 0-1.556-4.388 7.002 7.002 0 0 0-3.94-2.452 1.767 1.767 0 0 0 0-.5 2.069 2.069 0 0 0-.52-.945c-1.085-1.348-2.262-2.734-3.876-3.372a5.026 5.026 0 0 0-2.092-.338h-.574a5.365 5.365 0 0 0-3.92 2.052c-.579.778-.927 1.7-1.426 2.53-.927 1.537-2.353 2.722-3.898 3.658-.93.566-1.906 1.053-2.784 1.693-3.184 2.325-4.652 6.621-3.852 10.461.353 1.686 1.1 3.346.9 5.056-.159 1.326-.87 2.518-1.594 3.644-.724 1.125-1.492 2.27-1.779 3.573-.287 1.302.015 2.837 1.102 3.627.4.288.884.473 1.225.823.227.27.417.568.565.889a8.837 8.837 0 0 0 2.301 2.702 8.786 8.786 0 0 0 3.174 1.573c.366.094.743.135 1.12.123H65.702c.864.054 1.749-.177 2.038-.946a2.16 2.16 0 0 1 .195-.501.586.586 0 0 1 .341-.237c.279.064.547.166.798.303a10.106 10.106 0 0 0 3.878 1.114c.226.018.453.022.68.011.47.045.946-.023 1.386-.198.423-.216.788-.53 1.065-.918.062-.078.118-.16.177-.236a19.624 19.624 0 0 1-1.737 5.438s-1.411 2.365-1.31 4.749a4.788 4.788 0 0 0 .53 2.506s.04-.104.122-.267c.404.68 1.731 2.859 2.602 3.622.042 2.25.033 5.065-.247 5.645-.47.99-1.958 8.04 4.438 12.846l1.475 3.247-6.073.433c-.614-.085-8.555-1.159-8.595.404-.04 1.625 1.2 17.444 5.317 16.373 3.838-.998 2.572-5.612 2.381-6.231l.137-.038-.15-.043 3.07-2.925a1.371 1.371 0 0 0-.235-1.014l.03-.017 7.417.334 1.743 3.807s2.958 4.521.56 8.326c-2.397 3.804-4.877 9.753-5.278 13.362-.326 2.951-2.5 5.85-3.28 6.805-1.39.473-6.724 2.578-4.595 5.763 2.438 3.646 10.353 10.586 13.553 10.347 3.2-.239 1.918-2.577 1.918-2.577l-2.675-2.606s-.471-5.552-.28-7.177c.103-.844-.516-1.451-1.177-1.709.252-1.809.89-5.238 2.259-7.132 1.917-2.658 8.075-14.353 8.075-14.353s1.958-1.745 1.518-6.938a119.874 119.874 0 0 1-.332-5.388l6.969.314s7.476-.754 2.398-8.803c-5.078-8.05-15.87-15.938-15.87-15.938l-.097-4.982c.49.123.777.185.777.185s-.043-.18-.114-.502l.114.026s-1.56-6.784-2.04-12.177l.44.203c4.637 5.394 7.764.835 7.764.835s9.795-13.838 8.835-13.204a.825.825 0 0 1-.644.04l.706-2.26s2.891-4.441-1.306-6.938c-3.426-2.038-3.337 4.35-3.189 6.765l-.169-.144s-3.278 4.965-5.038 7.732c-1.76 2.767-3.237.946-3.237.946l-2.224-2.518a8.885 8.885 0 0 0 .53-3.15 5.375 5.375 0 0 0-1.504-4.086c-1.696-1.738-2.193-3.422-2.245-4.718a5.015 5.015 0 0 1 .445-1.943l11.555-6.148s2.438.038 5.716-5.037a87.138 87.138 0 0 1 6.997-9.276s-.068-.1-.186-.262c.118-.14.186-.216.186-.216s-.134-.196-.362-.498l1.781-2.065a26.726 26.726 0 0 0-.021 2.802l.922 3.133.518 17.444s-.56 1.655 3.04 3.332c3.045 1.418 7.868 3.783 9.275 4.48-.052.128-.082.197-.082.197l.419-.029.061.029c7.033-.634 6.793 6.422 6.793 6.422s.47 14.353-1.678 19.35c-2.148 4.996-1.84 11.18-1.84 11.18s.214-1.056 1.412.323l-.078.386c-.687 3.459-2.117 10.818-2.383 13.802a48.629 48.629 0 0 1-1.56 8.039l-.706 13.202 4.496.22-.049.472a1.496 1.496 0 0 1-.762 1.152c-1.539.839-5.177 3.783-4.885 12.868l-.155 1.461a18.431 18.431 0 0 1-2.196 7.049 7.738 7.738 0 0 0-.273.532.439.439 0 0 1 .123-.253s-2.337.487-1.857 6.832c.48 6.344 1.2 7.453 2.16 7.531.96.078 5.647 1.229 5.395-1.109-.251-2.339-.47-7.534-.16-8.326.311-.792 1.586-2.93.377-3.445a18.18 18.18 0 0 0 .506-4.446s2.353-3.726 4.035-5.114 2.588-3.746 3.198-6.779c.042-.199 4.957-3.491 4.235-6.224a16.234 16.234 0 0 1-.369-1.743h.087l1-6.027v5.869l.593.078-.022.473-.251 5.628a9.315 9.315 0 0 1-.706 3.187c-1.059 2.518-3.012 8.125-2.48 14.187l-.057 5.406c-.169.033-2.611.612-2.148 6.739.471 6.342 1.198 7.453 2.158 7.531.96.078 5.647 1.23 5.397-1.109-.249-2.338-.47-7.533-.16-8.325.311-.793.871-2.888-.338-3.403a4.54 4.54 0 0 1 .503-2.041c.527-.901 2.287-5.183 3.612-8.477a30.467 30.467 0 0 0 2.223-10.482v-.121a9.872 9.872 0 0 1 .765-3.53c.542-1.252.97-2.551 1.28-3.88.033-.159.059-.312.082-.473l1.149.154 3.92-17.049s1.072-9.24.548-13.414a8.221 8.221 0 0 0-.073-.485l.235.021s.8-2.06.56-10.863c-.24-8.803 1.6-11.586 1.6-11.586.993-3.164 2.09-4.223 2.73-4.578.164-.106.353-.167.548-.18l2.967 3.412.546.63a.239.239 0 0 0 0-.038l.235.276a2.603 2.603 0 0 1-.019-.423c1.584.924 5.242 3.086 7.426 4.637 2.847 2.022 3.628 1.785 6.118 1.575 1.51-.126 3.553-.977 4.922-1.625l.125-.059c.368.198.756.356 1.157.473 0 0 4.019 3.421 4.407-2.823.389-6.245-4.821-4.737-4.821-4.737ZM83.923 139.851a5.847 5.847 0 0 1-1.176-.499l1.176.499Zm-6.291-67.6.014.887-.061.029c.018-.312.033-.62.047-.915Zm62.856 79.148v.345a.253.253 0 0 1 0-.345Z"
            />
            <Path fill="#FF7590" d="M152 47h-7v7h7v-7Z" />
            <Path
                fill="#8E5362"
                d="M136.773 129.454c-.6 3.006-1.49 5.343-3.137 6.72-1.648 1.377-3.961 5.069-3.961 5.069-.04 4.911-1.335 6.403-1.335 6.403l-1.334.354h-3.295s-.589-1.65-.707-2.631c-.04-.328.193-.877.518-1.467a18.399 18.399 0 0 0 2.154-6.986l.153-1.45c-.278-8.999 3.295-11.92 4.794-12.753a1.469 1.469 0 0 0 .746-1.141l.266-2.572 8.864.436s-.189.783.148 2.594c.068.375.16.792.282 1.256.707 2.709-4.118 5.97-4.156 6.168ZM151.846 124.374a23.744 23.744 0 0 1-1.232 3.891 10.245 10.245 0 0 0-.74 3.541v.122a31.683 31.683 0 0 1-2.143 10.512c-1.279 3.302-2.974 7.6-3.482 8.504-.846 1.51-.347 4.056-.347 4.056l-4.901-.358.085-8.511c-.511-6.077 1.371-11.691 2.391-14.227a9.559 9.559 0 0 0 .693-3.195l.232-5.645.071-1.67s8.665-1.272 9.396.756c.201.537.153 1.336-.023 2.224Z"
            />
            <Path
                fill="#000"
                d="m142 123-10-.604.286-3.396 9.554.576s-.21 1.03.16 3.424ZM153.84 125l-9.84-1.553.075-1.98s9.026-1.508 9.787.896c.211.637.161 1.585-.022 2.637Z"
                opacity={0.1}
            />
            <Path
                fill="#BDD2E8"
                d="M158.31 106.373 154.407 123l-11.549-1.508v-5.723l-.998 5.881-13.86-.659.717-12.876a46.475 46.475 0 0 0 1.553-7.848c.27-2.909 1.69-10.084 2.375-13.455.239-1.111.373-1.812.373-1.812s23.738 4.793 25.292 6.533c.265.297.439.928.547 1.765.521 4.065-.547 13.075-.547 13.075Z"
            />
            <Path
                fill="#000"
                d="M131 108s8.844-4.889 11-3.857L131 108ZM135 92s7.761 5.512 8 7l-8-7ZM133 112.012s5.306-.197 7 .988l-7-.988ZM143.634 106s2.022 8.693 1.146 11.07c-.877 2.378-1.78-.556-1.78-.556l.634-10.514Z"
                opacity={0.1}
            />
            <Path
                fill="#494457"
                d="M140.257 151s-2.686.38-2.198 6.451c.489 6.071 1.221 7.137 2.198 7.212.976.075 5.737 1.178 5.493-1.063-.244-2.241-.489-7.21-.164-7.97.325-.761.886-2.763-.344-3.257l-.266 1.171s-2.605-2.241-4.151-.608a5.971 5.971 0 0 0-.319-1.169c-.154-.355-.491-.539-.249-.767Z"
            />
            <Path
                fill="#8E5362"
                d="M187 74.465s-.583.338-1.439.76c-1.322.653-3.291 1.512-4.749 1.64-2.403.21-3.155.45-5.902-1.59-2.108-1.563-5.637-3.744-7.174-4.675l-.669-.41-.067-.041v-.029l1.275-3.632L172.788 64l1.12.996 3.335 2.963s.521.868 1.361.808c.84-.06 5.323.329 5.323.329l.847.144 1.784.307.442 4.918Z"
            />
            <Path
                fill="#000"
                d="M187 73.237s-.745.34-1.838.763c-1.156-.481-2.593-1.384-2.04-2.87.5-1.336.636-2.379 1.046-3.13l2.279.308.553 4.929Z"
                opacity={0.1}
            />
            <Path
                fill="#8E5362"
                d="M186.303 67.143s5.053-1.372 4.677 4.389c-.376 5.76-4.27 2.607-4.27 2.607s-3.311-.823-2.614-2.991c.697-2.168.495-3.483 2.207-4.005ZM133 47.707l-5.243 2.257-.081.036-.058-.029-.326-.168c-1.356-.692-6.016-3.061-8.947-4.467-3.471-1.66-2.932-3.32-2.932-3.32l-.5-17.388-.888-3.122s-.627-10.585 4.396-13.239c5.023-2.653 1.775 15.332 1.775 15.332l.388 3.737c.252 2.39.712 4.753 1.377 7.06.217.757.354 1.537.407 2.325.155 2.528 1.312 2.36 1.312 2.36 1.828.294 3.592.908 5.215 1.816.603.326 1.181.7 1.726 1.12l2.379 5.69ZM151.418 56 147 55.526s1.302-2.008 1.875-3.962c.081-.268.146-.54.194-.817.133-.774.099-1.492-.242-2.01-1.292-1.973 7.691-4.737 7.691-4.737a23.579 23.579 0 0 0-.098 3.287c.026.763.102 1.524.228 2.276.272 1.532.814 2.975 1.846 3.713 2.821 2.013-7.076 2.724-7.076 2.724Z"
            />
            <Path
                fill="#000"
                d="M151.417 55 147 54.559s1.302-1.872 1.875-3.694c.509.7.685.685 1.4.824 0 0 4.457.638 6.376-2.689.271 1.428.813 2.773 1.845 3.461 2.815 1.877-7.079 2.539-7.079 2.539ZM167.743 70.575a2.63 2.63 0 0 0 .019.425l-.703-.834-.059-.07 1.292-3.618L172.865 64l1.135.992c-1.625.633-6.184 2.643-6.257 5.583ZM133 46.991l-5.436 1.984h-.144L127 49s.031-.06.082-.173c.453-.956 2.557-5.626 1.648-7.827.625.287 1.223.616 1.789.984L133 46.99ZM159 93c-2.091-.177-23.006-2.003-24.957-4.91A10.215 10.215 0 0 0 133 86.748c.237-1.072.37-1.748.37-1.748s23.546 4.623 25.087 6.302c.263.281.436.888.543 1.698Z"
                opacity={0.1}
            />
            <Path
                fill="#FF7590"
                d="M151.157 53.067s4.631.69 6.588-2.936c0 0 3.269 2.706 5.224 2.938C164.924 53.301 174 64.82 174 64.82s-7.276 2.366-6.806 6.152l-3.443-4.022s-1.72-.08-3.206 4.732c0 0-1.8 2.759-1.565 11.513.234 8.755-.547 10.806-.547 10.806s-22.845-1.97-24.878-5.205c-2.032-3.235-2.347-1.657-2.347-1.657s-.314-6.151 1.798-11.12c2.112-4.969 1.643-19.243 1.643-19.243s.235-7.02-6.649-6.389c0 0 2.894-6.783 1.565-9.386 0 0 3.96 1.084 6.781 1.117a11.52 11.52 0 0 1 4.994 1.183c.847.419 1.629.946 2.072 1.576 1.329 1.893 3.521 1.027 3.521 1.027a35.899 35.899 0 0 0 2.042 5.046c.091.173.183.343.277.507.136.236.276.473.417.667.564.812.723.79 1.488.944Z"
            />
            <Path
                fill="#000"
                d="M157.892 46.905a7.382 7.382 0 0 1-.827.89 8.258 8.258 0 0 1-2.672 1.631 8.99 8.99 0 0 1-3.171.574c-.282 0-.564-.012-.844-.038.136-.684.1-1.318-.248-1.776C148.807 46.442 158 44 158 44c-.114.965-.15 1.935-.108 2.905Z"
                opacity={0.1}
            />
            <Path
                fill="#8E5362"
                d="M160 42.5a8.5 8.5 0 1 1-8.5-8.5 8.47 8.47 0 0 1 8.5 8.5Z"
            />
            <Path
                fill="#000"
                d="m163 61.01.25 5.99s3.633-2.153 3.748-4.2c.114-2.045-3.998-1.79-3.998-1.79ZM144 66s6.509 9.914 10.296 10.92C158.083 77.925 145.42 69.214 144 66ZM150 67s3.493 4.446 6 5l-6-5ZM138 77s7 6.6 11 7l-11-7ZM159 42.241A8.222 8.222 0 0 1 156.651 48l-.902-.563a2.5 2.5 0 0 1-.879-.765c-.298-.499-.211-1.125-.187-1.707.049-1.231-.289-2.564-1.25-3.334-1.557-1.25-4.054-.557-5.638-1.784a5.566 5.566 0 0 1-.998-1.114l-1.485-1.994c-.089-.118-.197-.235-.312-.374a8.202 8.202 0 0 1 8.947-1.722 8.221 8.221 0 0 1 3.667 3.04 8.25 8.25 0 0 1 1.372 4.568l.014-.01Z"
                opacity={0.1}
            />
            <Path
                fill="#362133"
                d="M145.6 31.837c.718-.537 1.594-.82 2.402-1.215.807-.395 1.521-.898 2.328-1.235.807-.336 1.741-.534 2.578-.253 1.796.604 2.475 3.06 4.322 3.49.312.072.633.08.947.126.6.112 1.169.346 1.669.689.5.342.92.785 1.233 1.298a6.507 6.507 0 0 1 .917 3.415 5.356 5.356 0 0 1-.291 1.96c-.546 1.465-1.916 2.469-2.84 3.737A7.006 7.006 0 0 0 157.537 48l-2.239-1.363a2.404 2.404 0 0 1-.858-.73c-.291-.475-.206-1.072-.183-1.627.048-1.174-.282-2.444-1.218-3.179-1.523-1.192-3.961-.532-5.505-1.701-.372-.31-.7-.667-.975-1.062l-1.45-1.901c-.314-.414-.917-.928-1.055-1.43-.305-1.083.739-2.562 1.546-3.17Z"
            />
            <Path
                fill="#000"
                d="M155.934 46.288a2.496 2.496 0 0 1-.886-.778c-.301-.507-.214-1.143-.19-1.734.05-1.25-.291-2.604-1.26-3.386-1.571-1.27-4.09-.567-5.687-1.813a5.636 5.636 0 0 1-1.007-1.131l-1.498-2.026c-.327-.44-.947-.988-1.09-1.524-.258-.923.396-2.126 1.095-2.896-.784.732-1.644 2.121-1.353 3.157.152.536.765 1.083 1.09 1.524l1.498 2.025c.283.421.622.802 1.007 1.131 1.589 1.247 4.108.543 5.686 1.813.967.782 1.308 2.136 1.258 3.387-.023.59-.111 1.227.19 1.734.23.327.534.593.886.777L157.986 48c0-.139 0-.277.014-.414l-2.066-1.298Z"
                opacity={0.1}
            />
            <Path
                fill="#494457"
                d="M123.841 144s-2.238.453-1.779 6.498c.46 6.045 1.149 7.093 2.069 7.167.919.075 5.401 1.17 5.171-1.057-.23-2.227-.46-7.165-.154-7.921.306-.756 1.519-2.786.361-3.277l-.936 1.204s-2.452-2.227-3.907-.604c0 0-1.36-1.483-.825-2.01Z"
            />
            <Path
                fill="#000"
                d="M126 149c.54.208 1.044.462 1.582.67a4.208 4.208 0 0 0 1.717.329 1.38 1.38 0 0 0 .701-.197M141 155c.352.229.625.521 1.022.71.563.266 1.283.282 1.97.288.115.007.23-.003.338-.03a.777.777 0 0 0 .301-.199l.369-.336"
                opacity={0.1}
            />
            <Path
                fill="#FFC1C7"
                d="M102.135 51.457s-1.173-10.667 3.39-8.041c4.562 2.625 1.421 7.291 1.421 7.291L105.874 54l-3.739-2.543ZM109 18.951l2.452-2.393s4.702-13.444 9.361-9.99c4.66 3.452-5.905 12.184-5.905 12.184L112.107 22 109 18.951Z"
            />
            <Path
                fill="#FF5374"
                d="M74.121 69.261 74 71.938s2.222 3.779 3.15 4.055c.928.277.848-7.993.848-7.993l-3.877 1.261Z"
            />
            <Path
                fill="#000"
                d="M74.121 69.261 74 71.938s2.222 3.779 3.15 4.055c.928.277.848-7.993.848-7.993l-3.877 1.261Z"
                opacity={0.1}
            />
            <Path fill="#FFC1C7" d="m79 67 .159 10H90l-.816-5.826L79 67Z" />
            <Path
                fill="#575988"
                d="m80.177 91 .494 3.155 6.196 14.284s2.812 4.497.531 8.285c-2.28 3.787-4.635 9.705-5.016 13.294C82 133.606 79 137.119 79 137.119L85.538 140s.456-5.641 2.28-8.285c1.824-2.644 7.675-14.281 7.675-14.281s1.863-1.738 1.446-6.905c-.417-5.168-.38-8.799-.38-8.799l-.646-8.245L80.177 91Z"
            />
            <Path
                fill="#000"
                d="m80.177 91 .494 3.155 6.196 14.284s2.812 4.497.531 8.285c-2.28 3.787-4.635 9.705-5.016 13.294C82 133.606 79 137.119 79 137.119L85.538 140s.456-5.641 2.28-8.285c1.824-2.644 7.675-14.281 7.675-14.281s1.863-1.738 1.446-6.905c-.417-5.168-.38-8.799-.38-8.799l-.646-8.245L80.177 91Z"
                opacity={0.1}
            />
            <Path
                fill="#C4747B"
                d="M79.34 137s-7.257 2.189-4.851 5.788c2.406 3.599 10.215 10.441 13.369 10.206 3.154-.235 1.893-2.543 1.893-2.543l-2.643-2.581s-.473-5.474-.275-7.076c.2-1.603-2.247-2.346-2.564-1.408-.318.939-4.93-2.386-4.93-2.386Z"
            />
            <Path
                fill="#575988"
                d="m85.412 73-5.629.647c-.503.057-.967.31-1.3.705-.332.396-.51.907-.497 1.432.06 2.337.1 6.054-.215 6.732-.463 1.002-1.89 8.135 4.283 12.982l8.375 2.765L77 99.266l.426 7.734 2.084-1.202L104.978 107s7.217-.762 2.316-8.895c-4.902-8.134-15.319-16.109-15.319-16.109l-.115-6.332-.774-1.842L85.412 73Z"
            />
            <Path
                fill="#000"
                d="M92 97c.946-.66 1.968-1 3-1s2.054.34 3 1h-6Z"
                opacity={0.1}
            />
            <Path
                fill="#C4747B"
                d="M76.817 98.438s-8.774-1.209-8.816.39c-.042 1.6 1.224 17.175 5.429 16.121 4.205-1.054 2.407-6.206 2.407-6.206l3.144-2.888s.326-1.6-1.755-1.445l-.41-5.972Z"
            />
            <Path
                fill="#FF5374"
                d="m90.584 53.687 3.206 3.727s1.396 1.768 3.055-.922c1.66-2.69 4.753-7.492 4.753-7.492s3.434 3.073 4.34 2.46c.905-.614-8.337 12.796-8.337 12.796s-2.942 4.417-7.32-.807L89 62.834l1.584-9.148Z"
            />
            <Path
                fill="#000"
                d="m90.584 53.687 3.206 3.727s1.396 1.768 3.055-.922c1.66-2.69 4.753-7.492 4.753-7.492s3.434 3.073 4.34 2.46c.905-.614-8.337 12.796-8.337 12.796s-2.942 4.417-7.32-.807L89 62.834l1.584-9.148Z"
                opacity={0.1}
            />
            <Path fill="#FFC1C7" d="M81 39a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
            <Path
                fill="#000"
                d="M80.433 35.964s-5.807 2.83-5.12 7.783c.688 4.952.802 11.202.802 11.202s2.636 4.01-.859 11.674c0 0-2.233 3.891-.744 6.721 0 0 1.651-4.48 5.92-1.179C84.703 75.467 91.577 77 91.577 77s-3.55-16.037-1.374-18.278c0 0 3.779-5.778.343-9.433-3.436-3.656-1.718-7.075-1.718-7.075l11.034-6.092s2.327.038 5.458-4.993A86.523 86.523 0 0 1 112 21.931s-2.368-3.655-4.581-3.931c0 0-.879.943-1.489 3.5-.325 1.356-2.535 3.622-4.535 5.45-1.42 1.297-2.79 2.644-4.157 4.01-1.013 1.002-3.266 2.436-8.182 3.247-8.09 1.328-8.623 1.757-8.623 1.757Z"
                opacity={0.1}
            />
            <Path
                fill="#FF5374"
                d="M80.433 34.964s-5.807 2.83-5.12 7.783c.688 4.952.802 11.202.802 11.202s2.636 4.01-.859 11.674c0 0-2.233 3.891-.744 6.721 0 0 1.651-4.48 5.92-1.179C84.703 74.467 91.577 76 91.577 76s-3.55-16.037-1.374-18.278c0 0 3.779-5.778.343-9.433-3.436-3.656-1.718-7.075-1.718-7.075l11.034-6.092s2.327.038 5.458-4.993A86.523 86.523 0 0 1 112 20.931s-2.368-3.655-4.581-3.931c0 0-.879.943-1.489 3.5-.325 1.356-2.535 3.622-4.535 5.45-1.42 1.297-2.79 2.644-4.157 4.01-1.013 1.002-3.266 2.436-8.182 3.247-8.09 1.328-8.623 1.757-8.623 1.757Z"
            />
            <Path
                fill="#000"
                d="M86 65s4.876 6.823 5 8c.002 0-.742-7.334-5-8ZM79 42s3.272 2.014 8 .326c-1.307.227-2.69.315-4.066.259A18.008 18.008 0 0 1 79 42Z"
                opacity={0.1}
            />
            <Path
                fill="#000"
                d="M81.985 23.614a2.1 2.1 0 0 0-.496-.942c-1.038-1.335-2.166-2.706-3.713-3.34a5.014 5.014 0 0 0-3.201-.13 5.13 5.13 0 0 0-2.654 1.84c-.556.768-.887 1.682-1.367 2.504-.887 1.521-2.258 2.694-3.733 3.622-.89.558-1.826 1.04-2.665 1.674-3.048 2.301-4.457 6.554-3.69 10.362.338 1.667 1.053 3.311.86 5.005-.15 1.314-.832 2.491-1.523 3.607-.692 1.117-1.429 2.247-1.705 3.533-.275 1.286.014 2.81 1.055 3.589.383.287.845.47 1.174.815.217.267.399.564.54.88a8.608 8.608 0 0 0 2.196 2.674 8.37 8.37 0 0 0 3.048 1.566c.988.266 2.313.169 2.674-.81.041-.174.104-.34.186-.498.326-.47 1.045-.207 1.55.064a9.423 9.423 0 0 0 3.706 1.09 3.02 3.02 0 0 0 1.519-.186 2.826 2.826 0 0 0 1.022-.906c1.208-1.614 1.555-3.721 1.762-5.744.135-1.317.23-2.657-.016-3.957-.39-2.086-1.629-4.036-1.445-6.15.195-2.262 1.985-4.11 2.258-6.36a4.943 4.943 0 0 0-.806-3.341 4.798 4.798 0 0 1-.614-.984 1 1 0 0 1 .184-1.081 1.59 1.59 0 0 1 .478-.236c1.477-.582 2.265-2.098 2.37-3.65.042-.589 0-1.13.16-1.705.252-.888 1.017-1.858.886-2.805Z"
                opacity={0.1}
            />
            <Path
                fill="#BB7684"
                d="M81.985 23.614a2.1 2.1 0 0 0-.496-.942c-1.038-1.335-2.166-2.706-3.713-3.34a5.014 5.014 0 0 0-3.201-.13 5.13 5.13 0 0 0-2.654 1.84c-.556.768-.887 1.682-1.367 2.504-.887 1.521-2.258 2.694-3.733 3.622-.89.558-1.826 1.04-2.665 1.674-3.048 2.301-4.457 6.554-3.69 10.362.338 1.667 1.053 3.311.86 5.005-.15 1.314-.832 2.491-1.523 3.607-.692 1.117-1.429 2.247-1.705 3.533-.275 1.286.014 2.81 1.055 3.589.383.287.845.47 1.174.815.217.267.399.564.54.88a8.608 8.608 0 0 0 2.196 2.674 8.37 8.37 0 0 0 3.048 1.566c.988.266 2.313.169 2.674-.81.041-.174.104-.34.186-.498.326-.47 1.045-.207 1.55.064a9.423 9.423 0 0 0 3.706 1.09 3.02 3.02 0 0 0 1.519-.186 2.826 2.826 0 0 0 1.022-.906c1.208-1.614 1.555-3.721 1.762-5.744.135-1.317.23-2.657-.016-3.957-.39-2.086-1.629-4.036-1.445-6.15.195-2.262 1.985-4.11 2.258-6.36a4.943 4.943 0 0 0-.806-3.341 4.798 4.798 0 0 1-.614-.984 1 1 0 0 1 .184-1.081 1.59 1.59 0 0 1 .478-.236c1.477-.582 2.265-2.098 2.37-3.65.042-.589 0-1.13.16-1.705.252-.888 1.017-1.858.886-2.805Z"
            />
            <G fill="#000" opacity={0.1}>
                <Path
                    d="M67.265 60.154a1.138 1.138 0 0 0-.15.293c-.171.345-.617.503-1.115.542.692.053 1.433-.074 1.666-.542.034-.102.085-.2.15-.293a.45.45 0 0 1 .184-.118c-.28-.061-.566-.058-.735.118ZM79.986 23.65a2.142 2.142 0 0 0-.451-.949c-.945-1.343-1.971-2.723-3.378-3.36a3.922 3.922 0 0 0-1.924-.327c.445.032.882.142 1.296.327 1.407.637 2.434 2.017 3.379 3.36.222.265.378.592.451.948.12.948-.575 1.932-.805 2.809-.152.578-.108 1.12-.144 1.716-.098 1.56-.813 3.08-2.16 3.673a1.395 1.395 0 0 0-.434.237c-.12.142-.201.322-.23.516-.03.195-.007.395.065.574.149.355.335.688.556.99.6.981.861 2.177.736 3.361-.251 2.269-1.882 4.127-2.057 6.4-.168 2.132.961 4.09 1.315 6.187.221 1.308.138 2.657.014 3.982-.188 2.036-.502 4.16-1.603 5.78a2.669 2.669 0 0 1-.928.912 1.88 1.88 0 0 1-.684.192 2.41 2.41 0 0 0 1.31-.192c.372-.207.693-.515.935-.895 1.102-1.621 1.415-3.745 1.604-5.78.123-1.325.209-2.674-.015-3.982-.353-2.097-1.482-4.062-1.315-6.188.18-2.278 1.806-4.136 2.057-6.399a5.384 5.384 0 0 0-.736-3.36 4.927 4.927 0 0 1-.556-.991 1.105 1.105 0 0 1-.065-.574c.03-.194.11-.374.23-.516.133-.106.28-.186.435-.237 1.346-.588 2.061-2.114 2.16-3.674.035-.595 0-1.137.144-1.716.224-.893.918-1.87.798-2.825Z"
                    opacity={0.1}
                />
            </G>
            <Path
                fill="#000"
                d="M73 107c.496.427 1.134.735 1.841.889a4.915 4.915 0 0 0 2.159-.018M87 148c-.138.409-.3.704-.472.863-.173.16-.353.18-.528.06"
                opacity={0.1}
            />
            <Path
                fill="#84CC16"
                d="M24.5 156c3.59 0 6.5-.448 6.5-1s-2.91-1-6.5-1-6.5.448-6.5 1 2.91 1 6.5 1Z"
                opacity={0.1}
            />
            <Path
                fill="#84CC16"
                d="M196.5 176c3.59 0 6.5-.448 6.5-1s-2.91-1-6.5-1-6.5.448-6.5 1 2.91 1 6.5 1Z"
            />
            <Path
                fill="#84CC16"
                d="M196.5 156c3.59 0 6.5-.448 6.5-1s-2.91-1-6.5-1-6.5.448-6.5 1 2.91 1 6.5 1ZM42.5 165c3.59 0 6.5-.448 6.5-1s-2.91-1-6.5-1-6.5.448-6.5 1 2.91 1 6.5 1Z"
                opacity={0.1}
            />
            <Path
                fill="#84CC16"
                d="M216.5 166c5.247 0 9.5-.895 9.5-2s-4.253-2-9.5-2-9.5.895-9.5 2 4.253 2 9.5 2Z"
            />
            <Path
                fill="#84CC16"
                d="M82 180c11.598 0 21-1.567 21-3.5s-9.402-3.5-21-3.5-21 1.567-21 3.5 9.402 3.5 21 3.5Z"
                opacity={0.1}
            />
            <Path
                fill="#84CC16"
                d="M221.037 161.496c.446-.364.771-.853.933-1.405.119-.558-.119-1.225-.651-1.429-.598-.228-1.237.184-1.721.604s-1.04.893-1.674.806a2.545 2.545 0 0 0 .787-2.381.999.999 0 0 0-.219-.485c-.333-.354-.933-.201-1.332.078-1.263.888-1.616 2.601-1.623 4.144-.126-.556-.019-1.136-.022-1.699-.002-.562-.16-1.213-.641-1.511a1.968 1.968 0 0 0-.973-.243c-.568-.019-1.2.037-1.589.452-.486.516-.357 1.38.063 1.941.421.56 1.057.922 1.643 1.315.471.279.874.662 1.176 1.118.035.064.065.13.088.199h3.56a9.893 9.893 0 0 0 2.195-1.504ZM201.039 172.487a2.84 2.84 0 0 0 .931-1.402c.119-.557-.117-1.211-.652-1.426-.597-.228-1.237.184-1.72.603-.484.418-1.04.891-1.675.803a2.522 2.522 0 0 0 .788-2.375.965.965 0 0 0-.219-.484c-.33-.354-.933-.201-1.329.077-1.264.886-1.616 2.596-1.624 4.136-.128-.555-.021-1.133-.024-1.695-.002-.562-.16-1.211-.641-1.508a1.952 1.952 0 0 0-.973-.231c-.568-.019-1.2.037-1.589.451-.486.516-.357 1.378.063 1.937.421.559 1.057.92 1.646 1.312.47.28.871.661 1.173 1.116.035.064.065.13.088.199h3.56a9.988 9.988 0 0 0 2.197-1.513Z"
            />
            <Path
                stroke="#535461"
                strokeMiterlimit={10}
                strokeWidth={2}
                d="M49.41 152s-3.582-11.277.672-19.575c1.812-3.472 2.36-7.395 1.56-11.18A28.307 28.307 0 0 0 49.937 116"
            />
            <Path
                fill="#84CC16"
                d="M51.999 110.59c0 1.388-2.5 5.41-2.5 5.41S47 111.978 47 110.59a2.525 2.525 0 0 1 .704-1.827A2.503 2.503 0 0 1 49.5 108a2.492 2.492 0 0 1 1.795.763 2.517 2.517 0 0 1 .704 1.827ZM57.593 117.823C56.758 118.986 52 121 52 121s.087-4.749.923-5.91c.41-.54 1.038-.913 1.749-1.041a3.027 3.027 0 0 1 2.058.355c.608.356 1.039.913 1.2 1.551.162.639.04 1.309-.337 1.868ZM55.734 130.665c-1.191.618-5.734.192-5.734.192s2.366-4.006 3.557-4.622c.57-.274 1.22-.31 1.815-.099a2.438 2.438 0 0 1 1.369 1.228c.283.576.337 1.243.148 1.86a2.471 2.471 0 0 1-1.155 1.441ZM53.191 141.743C52.201 142.615 48 143 48 143s1.547-4.677 2.53-5.552c.476-.38 1.057-.526 1.621-.408.565.117 1.07.489 1.41 1.038.342.549.492 1.234.422 1.913-.07.678-.357 1.298-.8 1.732l.008.02ZM46.681 120.108C47.623 121.037 52 122 52 122s-1.071-4.43-2.017-5.359a2.348 2.348 0 0 0-1.675-.64 2.353 2.353 0 0 0-1.637.732 2.442 2.442 0 0 0-.671 1.689c.001.63.244 1.235.677 1.686h.005ZM43.282 132.667c1.189.615 5.718.189 5.718.189s-2.36-3.998-3.548-4.613a2.348 2.348 0 0 0-1.82-.11 2.431 2.431 0 0 0-1.374 1.23 2.54 2.54 0 0 0-.144 1.867 2.46 2.46 0 0 0 1.168 1.437ZM42.809 143.742C43.799 144.618 48 145 48 145s-1.547-4.679-2.53-5.552c-.476-.38-1.057-.526-1.621-.408-.565.117-1.07.489-1.41 1.039a3.055 3.055 0 0 0-.422 1.913c.07.679.357 1.299.8 1.733l-.008.017Z"
            />
            <Path
                fill="#A8A8A8"
                d="M42 149.958s4.075-.806 5.164-1.881c1.088-1.075 5.975-2.954 6.518-1.611.543 1.343 7.336 5.91 2.718 6.717-4.618.806-10.868 1.074-12.225.538-1.358-.536-2.175-3.763-2.175-3.763Z"
            />
            <Path
                fill="#000"
                d="M56.407 153.702c-4.618.791-10.868 1.054-12.225.525-1.036-.4-1.756-2.326-2.04-3.227l-.142.035s.815 3.162 2.175 3.69c1.36.529 7.607.263 12.225-.528 1.334-.232 1.715-.763 1.572-1.442-.107.435-.572.777-1.565.947Z"
                opacity={0.2}
            />
            <Path
                fill="#84CC16"
                d="M197.305 139s1.201 1.767-.553 4.423c-1.755 2.656-3.201 4.914-2.622 6.577 0 0 2.648-4.951 4.807-5.02 2.159-.068.734-3.009-1.632-5.98Z"
            />
            <Path
                fill="#000"
                d="M198.271 139c.106.171.19.358.249.555 2.126 2.774 3.258 5.365 1.214 5.429-1.903.061-4.186 3.842-4.734 4.797.018.074.039.147.064.219 0 0 2.678-4.948 4.862-5.016 2.183-.069.738-3.015-1.655-5.984Z"
                opacity={0.1}
            />
            <Path
                fill="#FFD037"
                d="M200.231 142.263c0 .407-.053.737-.117.737-.063 0-.114-.322-.114-.737s.064-.215.127-.215c.064 0 .104-.191.104.215Z"
            />
            <Path
                fill="#FFD037"
                d="M200.762 142.504c-.391.353-.732.566-.76.475-.028-.09.262-.446.653-.799.39-.352.237-.096.267 0 .03.097.23-.029-.16.324Z"
            />
            <Path
                fill="#84CC16"
                d="M191.697 139s-1.202 1.767.552 4.423 3.2 4.914 2.621 6.577c0 0-2.645-4.951-4.805-5.02-2.16-.068-.738-3.009 1.632-5.98Z"
            />
            <Path
                fill="#000"
                d="M191.731 139c-.106.171-.19.358-.249.555-2.125 2.774-3.256 5.365-1.213 5.429 1.902.061 4.183 3.842 4.731 4.797a1.98 1.98 0 0 1-.066.219s-2.675-4.948-4.859-5.016c-2.184-.069-.74-3.015 1.656-5.984Z"
                opacity={0.1}
            />
            <Path
                fill="#FFD037"
                d="M189 142.263c0 .407.053.737.116.737.064 0 .115-.322.115-.737s-.064-.215-.127-.215c-.064 0-.104-.191-.104.215ZM188.238 142.504c.391.353.73.566.76.475.03-.09-.262-.446-.653-.799-.39-.352-.237-.096-.267 0-.03.097-.23-.029.16.324Z"
            />
            <Path
                fill="#A8A8A8"
                d="M189 149.721s3.493-.099 4.548-.78c1.055-.682 5.374-1.497 5.635-.415.262 1.083 5.248 5.444 1.305 5.473-3.943.029-9.162-.559-10.212-1.141-1.051-.582-1.276-3.137-1.276-3.137Z"
            />
            <Path
                fill="#000"
                d="M200.559 153.56c-3.944.033-9.164-.652-10.215-1.33-.8-.517-1.121-2.373-1.226-3.23H189s.227 2.991 1.274 3.669c1.046.678 6.271 1.364 10.215 1.33 1.137 0 1.531-.439 1.51-1.074-.159.388-.593.627-1.44.635Z"
                opacity={0.2}
            />
        </G>
        <Defs>
            <LinearGradient
                id="b"
                x1={124.507}
                x2={124.507}
                y1={166.01}
                y2={5.001}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="gray" stopOpacity={0.25} />
                <Stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
                <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
            </LinearGradient>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h236v180H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default Hurrey;
