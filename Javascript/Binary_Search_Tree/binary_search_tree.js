const treeify = require("treeify")
/*
TRAVERSALS (GEÇİŞLER) 
    INORDER (Küçükten büyüğe sıralar)
        LEFT
        *NODE
        RIGHT

    PREORDER
        *NODE
        LEFT
        RIGHT

    POSTORDER
        LEFT
        RIGHT
        *NODE
*/
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data){
        if(this.data == data)
            throw new Error("Data already exist within tree");
        //Gelen data küçükse sola
        else if(this.data>data){
            if(this.left)
            //düğüm varsa tekrar insert çağırılarak kontrol sağlanıyor
                this.left.insert(data);
            else
            //Yoksa yeni düğüm oluşturuluyor
                this.left = new Node(data);
        }
        else{
            if(this.right)
                this.right.insert(data);
            else
                this.right = new Node(data);
        }
    }

    delete(data){
        //Silinmek istenen veriye denk gelene kadar recursive olarak delete metodu çağırılır
        if(data < this.data && this.left)
            this.left = this.left.delete(data);
        else if(data > this.data && this.right)
            this.right = this.right.delete(data);
        else{
            if(this.data == data){
                //Veri bulunduğunda sağ ve sol yaprakları var ise 
                if(this.right && this.left){
                    //Sağ alt ağacın en küçük elemanı bulunup silinmek istenen düğümün üzerine yerleştirilir
                    let minVal = this.right.findMin();
                    this.data = minVal;
                    //En küçük elemanın eskiden bulunduğu düğüm silinir
                    this.right = this.right.delete(minVal);
                }
                //Sadece sol yaprağı varsa
                else if(this.left)
                    return this.left;
                else if(this.right)
                    return this.right;
                else
                    return null;
            }
        }
        return this;
    }

    find(data){
        if(this.data == data)
            return true;
        //Aranan veri düğümdeki veriden küçükse ve düğümün sol yaprağı mevcut ise
        //aramayı o düğümde tekrar gerçekleştirir 
        else if(data < this.data && this.left !=null)
            return this.left.find(data);
        else if(data > this.data && this.right != null)
            return this.right.find(data);

        return false;
    }

    //Silmek istenen verinin altındaki en küçük elemanı bulur
    findMin(){
        if(this.left)
            return this.left.findMin();
        else
            return this.data;
    }

    inorder(currentNode){
        if(currentNode){
            this.inorder(currentNode.left);
            console.log(currentNode.data);
            this.inorder(currentNode.right); 
        }
    }

    preorder(currentNode){
        if(currentNode){
            console.log(currentNode.data);
            this.preorder(currentNode.left);
            this.preorder(currentNode.right); 
        }
    }

    postorder(currentNode){
        if(currentNode){
            this.postorder(currentNode.left);
            this.postorder(currentNode.right);
            console.log(currentNode.data);
        }
    }

    findHeight(currentNode){
        if(currentNode == null)
            return -1;
        let leftHeight = this.findHeight(currentNode.left);
        let rightHeight = this.findHeight(currentNode.right);
        
        return Math.max(leftHeight,rightHeight)+1;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(data){
        if(this.root)
            this.root.insert(data);
        else
            this.root = new Node(data);
    }

    delete(data){
        if(this.root)
            this.root = this.root.delete(data);
    }

    find(data){
        if(data)
            if(this.root)
                return this.root.find(data);
        return false; 
    }

    inorder(){
        if(this.root)
            this.root.inorder(this.root);
    }

    preorder(){
        if(this.root){
            this.root.preorder(this.root);
        }
    }

    postorder(){
        if(this.root){
            this.root.postorder(this.root);
        }
    }

    findHeight(){
        if(this.root)
            return this.root.findHeight(this.root);
        return -1;
    }
}

const tree = new BST()
tree.root = new Node(20)
//insterting
tree.insert(30);
tree.insert(15);
tree.insert(18);
tree.insert(21);
tree.insert(41);
tree.insert(60);

console.log(treeify.asTree(tree, true));
//deleting
// console.log(tree.find(41).toString());
// tree.delete(41);
// console.log(treeify.asTree(tree, true));
// console.log(tree.find(41).toString());

//traversals
// tree.inorder();
// console.log("-------");
// tree.preorder();
// console.log("-------");
// tree.postorder();

//Calculating tree height
//console.log("Tree Height: " + tree.findHeight());