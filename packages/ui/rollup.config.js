import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';

export default
{
    external: ['@martinrossil/domain'],
    input: 'src/index.ts',
    output: {
        file: 'lib/index.js',
        format: 'esm',
        sourcemap: false,
    },
    plugins: [
        clear({ targets: ['lib'] }),
        typescript({
            tsconfig: "tsconfig.json",
            clean: true
        }),
    ],
};