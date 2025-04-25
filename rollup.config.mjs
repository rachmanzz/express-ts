import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import  terser  from "@rollup/plugin-terser";
import { builtinModules } from 'module';

export default {
    input: 'runner/start.ts',
    output: [
        {
            dir: 'dist',
            format: 'esm',
            preserveModules: false,
            preserveModulesRoot: '.',
            entryFileNames: 'index.mjs',
        }

    ],
    external: [
        ...builtinModules,
        /node_modules/
    ],
    plugins: [
        resolve({ preferBuiltins: true, browser: false }),
        typescript({ tsconfig: './tsconfig.json' }),
        terser()
    ],
};