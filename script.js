class Rectangle {
        constructor(width, height) {
          this.width = width;
          this.height = height;
        }

        perimeter() {
          return 2 * (this.width + this.height);
        }

        area() {
          return this.width * this.height;
        }
      }

      class Triangle {
        constructor(side1, side2, side3) {
          this.sides = [side1, side2, side3];
        }

        getPerimeter() {
          return this.sides.reduce((sum, side) => sum + side, 0);
        }

        getArea() {
          const s = this.getPerimeter() / 2;
          return Math.sqrt(
            s * (s - this.sides[0]) * (s - this.sides[1]) * (s - this.sides[2])
          );
        }
      }

      document.getElementById("calcRectangle").addEventListener("click", () => {
        const width = parseFloat(document.getElementById("rectWidth").value);
        const height = parseFloat(document.getElementById("rectHeight").value);

        if (!isNaN(width) && !isNaN(height)) {
          const rect = new Rectangle(width, height);
          document.getElementById("rectResult").innerHTML = `
            Perimeter: <span class="text-success">${rect.perimeter()}</span><br />
            Area: <span class="text-primary">${rect.area()}</span>
          `;
        } else {
          document.getElementById("rectResult").textContent =
            "Please enter valid dimensions.";
        }
      });

      document.getElementById("calcTriangle").addEventListener("click", () => {
        const side1 = parseFloat(document.getElementById("side1").value);
        const side2 = parseFloat(document.getElementById("side2").value);
        const side3 = parseFloat(document.getElementById("side3").value);

        if (!isNaN(side1) && !isNaN(side2) && !isNaN(side3)) {
          const triangle = new Triangle(side1, side2, side3);
          document.getElementById("triResult").innerHTML = `
            Perimeter: <span class="text-success">${triangle.getPerimeter()}</span><br />
            Area: <span class="text-primary">${triangle
              .getArea()
              .toFixed(2)}</span>
          `;
        } else {
          document.getElementById("triResult").textContent =
            "Please enter valid side lengths.";
        }
      });
