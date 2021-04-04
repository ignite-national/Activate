using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ColorPaint : MonoBehaviour
{
    public GameObject SelectedColor;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

        if (Input.GetMouseButton(0))
        {
            RaycastHit2D hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
            if (hit.transform != null && hit.transform.CompareTag("PaintColor"))
            {
              //  Debug.Log("hit " + hit.transform.gameObject.name);
                //  if (!hit.transform.GetComponent<ColorsScript>().inRightPosition)
                //{
                if (SelectedColor != null)
                {
                    SelectedColor.GetComponent<PaintColorsScript>().Selected = false;
                }
                SelectedColor = hit.transform.gameObject;
                SelectedColor.GetComponent<PaintColorsScript>().Selected = true;
                //}
            }
        }


    }
}
