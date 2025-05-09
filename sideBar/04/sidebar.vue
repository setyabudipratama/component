<template>
    <div class="sidebar" :class="{ active: isActive }">
        <div class="menu" :class="{ active: isActive }" @click="toggleActive">
            <span></span>
        </div>
        <div class="profil">
            <img src="../assets/Ejen Alicia.jpg" alt="Ejen Alicia">
            <h3>alicia kheng</h3>
        </div>
        <span></span>
        <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>portfolio</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    data() {
        return {
            isActive: false
        }
    },

    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style scoped>
.sidebar {
    width: 200px;
    min-height: 80vh;
    background-color: white;
    padding: 20px 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: fixed;
    left: 0;
    transform: translateX(-100%);
    transition: all 1s ease;

    .menu {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 10%;
        right: -30%;
        background-color: white;
        border-radius: 50%;
        display: grid;
        place-items: center;
        cursor: pointer;

        span {
            width: 50%;
            height: 4px;
            background-color: black;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -200%);
            transition: all 1s ease;
        }
        
        span::before {
            content: '';
            width: 100%;
            height: 4px;
            background-color: black;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 200%);
            transition: all 1s ease;
        }
    }

    .menu.active span {
        transform: translate(-50%, -50%) rotate(45deg);
    }
    
    .menu.active span::before {
        transform: translate(-50%, -50%) rotate(-90deg);
    }

    .profil {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap-reverse;
        cursor: pointer;

        h3 {
            text-transform: capitalize;
            cursor: default;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1rem;
        }

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    span {
        width: 90%;
        height: 4px;
        background-color: black;
        position: relative;
        top: 10px;
    }

    ul {
        width: 100%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        /* background-color: yellow; */
        position: relative;
        top: 50px;

        li {
            text-transform: capitalize;
            list-style: none;
            cursor: pointer;
            font-size: 1.1rem;
        }

        li:hover {
            text-decoration: underline;
        }
    }
}

.sidebar.active {
    transform: translateX(20%);
}
</style>
