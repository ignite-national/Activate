using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ToolSelector : MonoBehaviour
{
    
    public GameObject SelectedTool;
    Texture2D tex;
    public GameObject Plane;
    // Start is called before the first frame update
    void Start()
    {

        tex = new Texture2D(256, 128);
        Plane.GetComponent<Renderer>().sharedMaterial.mainTexture = tex;

        for(int i = 0; i > -256; i--)
        {
            for(int j = 0; j > -128; j--)
            {
                tex.SetPixel(i, j, Color.white);

                tex.Apply();
            }
        }
    }

    // Update is called once per frame
    void Update()
    {

        if (Input.GetMouseButtonDown(0))
        {
            RaycastHit2D hit2 = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
           // Debug.Log(hit2.transform.CompareTag("Tool"));
            
            if (hit2.transform.CompareTag("Tool"))
            {

                if (SelectedTool !=null) SelectedTool.GetComponent<ToolScript>().Selected = false;
                SelectedTool = hit2.transform.gameObject;
               // Debug.Log(hit2.transform.gameObject);
                SelectedTool.GetComponent<ToolScript>().Selected = true;
            }
            else if (SelectedTool != null)
            {
              //  Debug.Log(SelectedTool.name);
                SelectedTool.GetComponent<ToolScript>().Selected = false;
                SelectedTool = null;
            }
        }

        if (tex != null)
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            RaycastHit hit;

            if (Physics.Raycast(ray, out hit, Mathf.Infinity) && Input.GetMouseButton(0))
            {
             //   Debug.Log("paint1");
                Color c = Color.white;
                if (SelectedTool.GetComponent<ToolScript>().isPaint && SelectedTool.GetComponent<ToolScript>().Selected)
                {
                    // Debug.Log("paint");
                    Debug.Log(this.gameObject.name + "Paint");
                    c = SelectedTool.GetComponent<ToolScript>().color1;
                }
                else if (SelectedTool.GetComponent<ToolScript>().isEraser && SelectedTool.GetComponent<ToolScript>().Selected)
                {
                    // Debug.Log("erase");
                    Debug.Log(this.gameObject.name + "erase");
                    c = Color.white;
                }

                Debug.Log(this.gameObject.name + " Color1: "  + SelectedTool.GetComponent<ToolScript>().color1);
                Debug.Log(this.gameObject.name + " Color: " + c);
                Vector2 uv;
                uv.x = (hit.point.x - hit.collider.bounds.min.x) / hit.collider.bounds.size.x;
                uv.y = (hit.point.y - hit.collider.bounds.min.y) / hit.collider.bounds.size.y;
                // Debug.Log("W " + (int)(-uv.x * tex.width) + " H " + (int)(-uv.y * tex.height));
                // Paint it red
                for(int j = 0; j < 10; j++)
                {
                    for(int i = 0; i < 10; i++)
                    {
                        tex.SetPixel((int)(-uv.x * tex.width), (int)(-uv.y * tex.height), c);
                        tex.SetPixel((int)(-uv.x * tex.width), (int)(-uv.y * tex.height) + j, c);
                        tex.SetPixel((int)(-uv.x * tex.width), (int)(-uv.y * tex.height) - j, c);
                        tex.SetPixel((int)(-uv.x * tex.width) + i, (int)(-uv.y * tex.height), c);
                        tex.SetPixel((int)(-uv.x * tex.width) - i, (int)(-uv.y * tex.height), c);
                        tex.SetPixel((int)(-uv.x * tex.width) + i, (int)(-uv.y * tex.height) - j, c);
                        tex.SetPixel((int)(-uv.x * tex.width) - i, (int)(-uv.y * tex.height) - j, c);
                        tex.SetPixel((int)(-uv.x * tex.width) + i, (int)(-uv.y * tex.height) + j, c);
                        tex.SetPixel((int)(-uv.x * tex.width) - i, (int)(-uv.y * tex.height) + j, c);
                    }
                }

                tex.Apply();

                Plane.GetComponent<Renderer>().sharedMaterial.mainTexture = tex;
                Debug.Log("erase2");

            }
        }
    }
}
