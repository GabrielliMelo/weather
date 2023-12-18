import { defineStore } from 'pinia';

export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        contador: 0
    }),
    actions: {
        incrementar() {
            this.contador++;
        },
        decrementar() {
            this.contador--;
        }
    }
});
